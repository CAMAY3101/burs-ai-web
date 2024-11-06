import { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { endpoint } from '../Config/utils/urls';

const PROGRESS_INDEX = 'PROGRESS_INDEX';
const AUTHENTICATED = 'AUTHENTICATED';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [verificationStep, setVerificationStep] = useState(() => {
        return parseInt(window.sessionStorage.getItem(PROGRESS_INDEX)) // Convertir de string a entero
    });
    
    const [tokenExist, setTokenExist] = useState(() => {
        return window.sessionStorage.getItem(AUTHENTICATED)
    });

    const checkToken = useCallback(() => {
        axios.get(endpoint.checkToken, { withCredentials: true })
            .then((response) => {
                if (response.data.tokenExist === true) {
                    window.sessionStorage.setItem(AUTHENTICATED, true);
                    setTokenExist(true);
                } else {
                    window.sessionStorage.removeItem(AUTHENTICATED);
                    setTokenExist(false);
                    window.sessionStorage.removeItem(PROGRESS_INDEX);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const navigateToNextStep = useCallback((nextStep) => {
        console.log('Navigate to next step:', nextStep);
        window.sessionStorage.setItem(PROGRESS_INDEX, nextStep.toString());
        setVerificationStep(nextStep);
    }, []);

    const getVerificationStepFromApi = useCallback(function () {
        axios.get(endpoint.usuarios.getVerificacionStepStatus, { withCredentials: true })
            .then((response) => {
                console.log('Response:', response);
                console.log('Verification step:', response.data.verificationStep);
                setVerificationStep(response.data.verificationStep);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const login = useCallback((step) => {
        console.log('Login');
        console.log('Step:', step);
        checkToken();
        console.log('Step:', step);
        if (step === 'ingresar datos') {
            navigateToNextStep(1);
        } else if (step === 'ingresar historial') {
            navigateToNextStep(2);
        } else if (step === 'ingresar domicilio') {
            navigateToNextStep(3);
        } else if (step === 'verificar correo') {
            navigateToNextStep(4);
        } else if (step === 'verificar telefono') {
            navigateToNextStep(5);
        } else if (step === 'verificar identidad') {
            navigateToNextStep(6);
        } else if (step === 'verificar ID') {
            navigateToNextStep(7);
        } else if (step === 'simulacion modelos') {
            navigateToNextStep(8);
        }
    }, [checkToken, navigateToNextStep]);

    const logout = useCallback(() => {
        axios.post(endpoint.usuarios.logout, { withCredentials: true })
            .then((response) => {
                console.log('Response:', response);
                window.sessionStorage.removeItem(AUTHENTICATED);
                window.sessionStorage.removeItem(PROGRESS_INDEX);
                setTokenExist(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const value = useMemo(
        () => ({
            tokenExist,
            verificationStep,
            login,
            checkToken,
            navigateToNextStep,
            getVerificationStepFromApi,
            logout
        }),
        [tokenExist, verificationStep, login, checkToken, navigateToNextStep, getVerificationStepFromApi, logout]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};

export function useAuthContext() {
    return useContext(AuthContext);
}