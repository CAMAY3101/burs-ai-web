import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PROGRESS_INDEX = 'PROGRESS_INDEX';
const AUTHENTICATED = 'AUTHENTICATED';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [verificationStep, setVerificationStep] = useState(() =>
        parseInt(window.sessionStorage.getItem(PROGRESS_INDEX)) // Convertir de string a entero
    );
    const [tokenExist, setTokenExist] = useState(() =>
        window.sessionStorage.getItem(AUTHENTICATED)
    );

    const checkToken = useCallback(() => {
        axios.get('https://bursapi.com/check-cookie', { withCredentials: true })
            .then((response) => {
                console.log('Response:', response);
                console.log('Token exist:', response.data.tokenExist);
                if (response.data.tokenExist === true) {
                    window.sessionStorage.setItem(AUTHENTICATED, true);
                    setTokenExist(true);
                } else {
                    window.sessionStorage.setItem(AUTHENTICATED, false);
                    setTokenExist(false);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const navigateToNextStep = useCallback((nextStep) => {
        window.sessionStorage.setItem(PROGRESS_INDEX, nextStep.toString());
        setVerificationStep(nextStep);
    }, []);

    const getVerificationStepFromApi = useCallback(function () {
        axios.get('https://bursapi.com/usuarios//getVerificacionStepStatus', { withCredentials: true })
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
        checkToken();
        if (step === 'ingresar datos') {
            navigateToNextStep(1);
        } else if (step === 'verificar correo') {
            navigateToNextStep(2);
        } else if (step === 'verificar telefono') {
            navigateToNextStep(3);
        } else if (step === 'ingresar historial') {
            navigateToNextStep(4);
        }
    }, [checkToken, navigateToNextStep]);

    const value = useMemo(
        () => ({
            tokenExist,
            verificationStep,
            login,
            checkToken,
            navigateToNextStep,
            getVerificationStepFromApi
        }),
        [tokenExist, verificationStep, login, checkToken, navigateToNextStep, getVerificationStepFromApi]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};

export function useAuthContext() {
    return useContext(AuthContext);
}