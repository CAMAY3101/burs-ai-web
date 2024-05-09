import React, { useState } from 'react';
import axios from 'axios';

import { Input, Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';

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

function VerificacionCorreo() {
    const { tokenExist, checkToken, navigateToNextStep } = useAuthContext();
    const [otpCode, setOtpCode] = useState('');

    const handleSubmit = async () => {
        //console.log( otpCode);
        try {
            const response = await axios.post('https://bursapi.com/usuarios/verifyEmail', {
                code: otpCode
            });
            if (response.data.status === 'success') {
                toast.success('Correo verificado con éxito');
                setTimeout(() => {
                    navigateToNextStep(3);
                }, 2000);
            }
        } catch (error) {
            if(error.response.status === 400) {
                toast.error('Codigo incorrecto')
            }
            else {
                toast.error('Error al verificar el correo, intentalo de nuevo')
            }
        }
    };

    const handleResend = async () => {
        try {
            const response = await axios.post('https://bursapi.com/usuarios/resendOTPCodeEmail');
            if (response.data.status === 'success') {
                toast('Codigo reenviado')
            }
        } catch (error) {
            toast.error('Error al reenviar el codigo')
        }
    };
  return (
      <div className='flex flex-col items-center space-y-14 mt-9'>
          <ol className="flex items-center w-11/12  space-x-4">
              <li className="flex items-center text-purple-heart-700/80 font-rubik font-medium text-sm">
                  <span className="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-700/80 rounded-full shrink-0">
                      1
                  </span>
                  Registro <span className="hidden sm:inline-flex sm:ms-2">de Datos</span>
                  <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                  </svg>
              </li>
              <li className="flex items-center text-purple-heart-700/80 font-rubik font-medium text-sm">
                  <span className="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-700/80 rounded-full shrink-0">
                      2
                  </span>
                  Verificación <span className="hidden sm:inline-flex sm:ms-2">de Datos</span>
                  <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                  </svg>
              </li>
              <li className="flex items-center text-purple-heart-200 font-rubik font-medium text-sm">
                  <span className="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-200 rounded-full shrink-0">
                      3
                  </span>
                  Solicitar <span className="hidden sm:inline-flex sm:ms-2">Prestamo</span>
              </li>
          </ol>
          <div className='w-11/12 flex flex-col space-y-12'>
            <h1 className='font-rubik font-bold text-2xl text-dark-blue-950'>Te enviamos un codigo al correo XX XXXX XXXX</h1>
            <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>Ingresa el codigo OTP que te enviamos por correo</p>
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
            </div>
            <div className='w-11/12'>
                <Button
                    className='w-full'
                    color='secondary'
                    onClick={handleSubmit}
                >
                Verficar Correo
                </Button>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            /> 
      </div>
  )
}

export default VerificacionCorreo