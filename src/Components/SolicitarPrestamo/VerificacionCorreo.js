import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../../Contexts/authContext';
import { useSecureEmailQuery, useVerifyEmail, useResendOtpEmail, useSendOtpPhone } from "../../hooks/useQueryHooks";
import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';


function VerificacionCorreo() {
    const { navigateToNextStep } = useAuthContext();
    const [otpCode, setOtpCode] = useState('');
    const { data: secureEmailData, isLoading: isLoadingEmail } = useSecureEmailQuery(
        () => {},
        () => toast.error("No se pudo obtener el correo seguro")
    );

    const emailSecure = secureEmailData?.email
        ? `al correo ${secureEmailData.email}`
        : "a tu correo";

    const { mutate: verifyEmail } = useVerifyEmail(
        () => {
            toast.success("Correo verificado con éxito");
            setTimeout(() => {
                sendOtpPhone();
            }, 2000);
        },
        (error) => {
            if (error?.status === 400) {
                toast.error("Código incorrecto");
            } else {
                toast.error("Error al verificar el correo, inténtalo de nuevo");
            }
        }
    );

    const { mutate: resendOtpCode } = useResendOtpEmail(
        () => toast.success("Código reenviado"),
        () => toast.error("Error al reenviar el código")
    );

    const { mutate: sendOtpPhone } = useSendOtpPhone(
        () => navigateToNextStep(5),
        (error) => console.error("Error enviando OTP al teléfono:", error)
    );

    const handleSubmit = () => {
        verifyEmail({ code: otpCode });
    };

    const handleResend = () => {
        resendOtpCode();
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
                <Button1
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