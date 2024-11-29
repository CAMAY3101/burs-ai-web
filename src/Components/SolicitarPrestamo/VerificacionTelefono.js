import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';

import { useAuthContext } from '../../Contexts/authContext';
import { endpoint } from '../../Config/utils/urls';


import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';


axios.defaults.withCredentials = true;

function VerificacionTelefono() {
    const { navigateToNextStep, checkToken } = useAuthContext();
    const [otpCode, setOtpCode] = useState('');
    const [phoneSecure, setPhoneSecure] = useState('')

    useEffect(() => {
        const fetchSecurePhone = async () => {
            try {
                const response = await axios.get( endpoint.usuarios.getSecurePhoneUser);
                if (response.data.status === 'success') {
                    setPhoneSecure('al teléfono ' + response.data.phone);
                }
            } catch (error) {
                setPhoneSecure('a tu teléfono');
            }
        };

        fetchSecurePhone();
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(endpoint.verificacion.verifyPhoneNumber, {
                code: otpCode
            });
            if (response.data.message === 'Teléfono verificado con éxito') {
                toast.success('Teléfono verificado con éxito');
                setTimeout(async () => {
                    try {
                        const response = await axios.post(endpoint.FAD.generateToken);
                        if (response.data.status === 'success') {
                            checkToken();
                            await axios.post(endpoint.FAD.createValidation);
                            navigateToNextStep(6);
                        }
                    } catch (error) {
                        console.error('Error enviando OTP:', error);
                    }
                }, 2000);
            }

        } catch (error) {
            if (error.response.status === 400) {
                toast.error('Código incorrecto')
            } else {
                toast.error('Error al verificar el teléfono, intentalo de nuevo')
            }
        }
    };

    const handleResend = async () => {
        try {
            const response = await axios.post(endpoint.verificacion.resendOTPCodePhoneNumber);
            if (response.data.status === 'success') {
                toast('Código reenviado')
            }
        } catch (error) {
            toast.error('Error al reenviar el código')
        }
    };

    return (
        <div className='sm:w-11/12 md:w-3/4 flex flex-col justify-start items-center space-y-8'>
            <div className='flex flex-col space-y-12'>
                <div className='flex flex-col space-y-5'>
                <TitlePage title={`Te enviamos un código ${phoneSecure}`} />
                    <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>Ingresa el codigo OTP que te enviamos por mensaje</p>
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
                <Button1
                    handleSubmit={handleSubmit}
                    label="Verificar Teléfono"
                />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}

export default VerificacionTelefono