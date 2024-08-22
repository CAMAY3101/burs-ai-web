import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';

import NavbarLoan from './NavbarLoan';
import { useAuthContext } from '../../Contexts/authContext';


const styles_input = {
    label: [
        "group-data-[filled-within=true]:text-dark-blue-950",
        "font-rubik",
        "font-medium",
        "text-base",
    ],
    input: [
        "font-rubik",
        "font-regular",
        "text-[15px]",
        "text-dark-blue-950",
        "placeholder:text-dark-blue-300",
    ],
    inputWrapper: [
        "rounded-xl",
        "border-dark-blue-400",
        "data-[hover=true]:border-dark-blue-700",
        "group-data-[focus=true]:border-dark-blue-900",
        "!cursor-text",
    ]
};

axios.defaults.withCredentials = true;

function VerificacionTelefono() {
    const { navigateToNextStep } = useAuthContext();
    const [otpCode, setOtpCode] = useState('');
    const [phoneSecure, setPhoneSecure] = useState('')

    useEffect(() => {
        const fetchSecurePhone = async () => {
            try {
                const response = await axios.get('https://api.burs.com.mx/usuarios/getSecurePhoneUser');
                if (response.data.status === 'success') {
                    setPhoneSecure('al telefono ' + response.data.phone);
                }
            } catch (error) {
                setPhoneSecure('a tu telefono');
            }
        };

        fetchSecurePhone();
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://api.burs.com.mx/verificacion/verifyPhoneNumber', {
                code: otpCode
            });
            if (response.data.message === 'Telefono verificado con éxito') {
                toast.success('Telefono verificado con éxito');
                setTimeout(() => {
                    navigateToNextStep(6);
                }, 2000);
            }

        } catch (error) {
            if (error.response.status === 400) {
                toast.error('Codigo incorrecto')
            } else {
                toast.error('Error al verificar el telefono, intentalo de nuevo')
            }
        }
    };

    const handleResend = async () => {
        try {
            const response = await axios.post('https://api.burs.com.mx/verificacion/resendOTPCodePhoneNumber');
            if (response.data.status === 'success') {
                toast('Codigo reenviado')
            }
        } catch (error) {
            toast.error('Error al reenviar el codigo')
        }
    };

    return (
        <div className='sm:w-11/12 md:w-3/4 flex flex-col justify-start items-center space-y-8'>
            <div className='flex flex-col space-y-12'>
                <div className='flex flex-col space-y-5'>
                    <h1 className='font-rubik font-bold text-2xl text-dark-blue-950'>Te enviamos un codigo {phoneSecure}</h1>
                    <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>Ingresa el codigo OTP que te enviamos por mensaje</p>
                </div>
                <div className='flex-col space-y-3'>
                    <Input
                        type='text'
                        label='Codigo OTP'
                        labelPlacement='outside'
                        placeholder='Ingresa el codigo'
                        variant='bordered'
                        classNames={styles_input}

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
                <Button
                    className='w-full'
                    color='secondary'
                    onClick={handleSubmit}
                >
                    Verificar Telefono
                </Button>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}

export default VerificacionTelefono