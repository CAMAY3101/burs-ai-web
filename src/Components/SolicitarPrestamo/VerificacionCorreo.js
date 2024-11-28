import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';

import { useAuthContext } from '../../Contexts/authContext';
import { endpoint } from '../../Config/utils/urls';

import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import ButtonContinue from '../CustomizeComponents/ButtomContinue.jsx';

axios.defaults.withCredentials = true;

function VerificacionCorreo() {
    const { navigateToNextStep } = useAuthContext();
    const [otpCode, setOtpCode] = useState('');
    const [emailSecure, setEmailSecure] = useState('');

    useEffect(() => {
        const fetchSecureEmail = async () => {
            try {
                const response = await axios.get(endpoint.usuarios.getSecureEmailUser);
                if (response.data.status === 'success') {
                    setEmailSecure('al correo ' + response.data.email);
                }
            } catch (error) {
                setEmailSecure('a tu correo');
            }
        };

        fetchSecureEmail();
    }, []);

    const handleSubmit = async () => {
        //console.log( otpCode);
        try {
            const response = await axios.post(endpoint.verificacion.verifyEmail, {
                code: otpCode
            });
            if (response.data.status === 'success') {
                toast.success('Correo verificado con éxito');
                setTimeout(async () => {
                    try {
                        const responseOTP = await axios.post(endpoint.verificacion.sendOTPCodePhoneNumber);
                        if (responseOTP.data.status === 'success') {
                            navigateToNextStep(5);
                        }
                    } catch (error) {
                        console.error('Error enviando OTP:', error);
                    }
                }, 2000);
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.error('Codigo incorrecto')
            }
            else {
                toast.error('Error al verificar el correo, intentalo de nuevo')
            }
        }
    };

    const handleResend = async () => {
        try {
            const response = await axios.post(endpoint.verificacion.resendOTPCodeEmail);
            if (response.data.status === 'success') {
                toast('Código reenviado')
            }
        } catch (error) {
            toast.error('Error al reenviar el codigo')
        }
    };

    return (
        <div className='sm:w-11/12 md:w-3/4 flex flex-col justify-start items-center space-y-8'>
            <div className='flex flex-col space-y-12'>
                <div className='flex flex-col space-y-5'>
                <TitlePage title={`Te enviamos un código ${emailSecure}`} />
                    <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>Ingresa el codigo OTP que te enviamos por correo</p>
                </div>
                <div className='flex-col space-y-3'>
                    <TextField
                        type='text'
                        label='Codigo OTP'
                        placeholder='Ingresa el codigo'
                        value={otpCode}
                        onValueChange={setOtpCode}
                    />
                    <Button
                        variant='light'
                        className='px-0 font-rubik font-medium text-xs text-purple-heart-700 data-[hover=true]:bg-default/0'
                        onClick={handleResend}
                    >
                        Reenviar codigo
                    </Button>
                </div>
                <ButtonContinue
                    handleSubmit={handleSubmit}
                    label="Verificar Correo"
                />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}

export default VerificacionCorreo