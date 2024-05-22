import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';

import NavbarLoan from '../../Components/Loan Service/NavbarLoan';
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

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://bursapi.com/usuarios/verifyPhoneNumber', {
                code: otpCode
            });
            if (response.data.message === 'Telefono verificado con éxito') {
                toast.success('Telefono verificado con éxito');
                setTimeout(() => {
                    navigateToNextStep(4);
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
            const response = await axios.post('https://bursapi.com/usuarios/resendOTPCodePhoneNumber');
            if (response.data.status === 'success') {
                toast('Codigo reenviado')
            }
        } catch (error) {
            toast.error('Error al reenviar el codigo')
        }
    };

    return (
        <div>
            <NavbarLoan />
            <div className='flex flex-col items-center'>
                <div className='sm:w-11/12 md:w-3/4 flex flex-col justify-start items-center space-y-8'>
                    <ol id='progress bar' className="flex items-center space-x-10">
                        <li className="flex items-center text-dark-blue-700 font-rubik font-medium text-xs sm:text-sm">
                            <span className="flex items-center justify-center w-9 h-9 me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base text-dark-blue-50 bg-dark-blue-700 rounded-full border-1">
                                1
                            </span>
                            Registro <span className="hidden lg:inline-flex lg:ms-2">de Datos</span>
                            <svg className="w-4 h-4 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className="flex items-center text-dark-blue-700 font-rubik font-medium text-xs sm:text-sm">
                            <span className="flex items-center justify-center w-9 h-9 me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base border-dark-blue-700 rounded-full border-1">
                                2
                            </span>
                            Verificacion <span className="hidden lg:inline-flex lg:ms-2">de Datos</span>
                            <svg className="w-4 h-4 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className="flex items-center text-dark-blue-200 font-rubik font-regular text-xs sm:text-sm">
                            <span className="flex items-center justify-center w-9 h-9 me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base text-dark-blue-950/30 border-dark-blue-950/50 bg-dark-blue-100 rounded-full border-1">
                                3
                            </span>
                            Solicitar <span className="hidden lg:inline-flex lg:ms-2">Prestamo</span>
                        </li>
                    </ol>
                    <div className='flex flex-col space-y-12'>
                        <div className='flex flex-col space-y-5'>
                            <h1 className='font-rubik font-bold text-2xl text-dark-blue-950'>Te enviamos un codigo al telefono XX XXXX XXXX</h1>
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
            </div>
        </div>
    )
}

export default VerificacionTelefono