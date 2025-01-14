import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../../Contexts/authContext';
import { useSecurePhoneQuery, useVerifyPhone, useResendOtpPhone, useGenerateToken, useCreateValidation } from '../../hooks/useQueryHooks.js';
import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';
import { phone_Verification } from '../../Config/Schemas/yupSchemas.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Loading from '../CustomizeComponents/Loading.jsx'


function VerificacionTelefono() {
    const { navigateToNextStep, checkToken } = useAuthContext();

    const defaultValues = {
        otpCode: '',
    };

    const methods = useForm({
        resolver: yupResolver(phone_Verification),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onError = (error) => {
        console.error("Error al verificar el telefono:", error);
        toast.error("Código incorrecto");
    };


    const { data: securePhoneData, isLoading: isLoadingPhone } = useSecurePhoneQuery(
        () => { },
        () => toast.error("No se pudo obtener el teléfono seguro")
    );
    const phoneSecure = securePhoneData?.data?.phone
        ? `al teléfono ${securePhoneData.data.phone}`
        : "a tu teléfono";

    // Hook para verificar el teléfono
    const { mutate: verifyPhone } = useVerifyPhone(
        () => {
            toast.success("Teléfono verificado");
            generateToken();
        },
        onError
    );

    // Hook para reenviar el código OTP por teléfono
    const { mutate: resendOtpPhone } = useResendOtpPhone(
        () => toast.success("Código reenviado"),
        () => toast.error("Error al reenviar el código")
    );

    // Hook para generar un token FAD
    const { mutate: generateToken } = useGenerateToken(
        () => {
            checkToken();
            createValidation(); // Crear validación
        },
        (error) => console.error("Error al generar token:", error)
    );

    // Hook para crear validación FAD
    const { mutate: createValidation } = useCreateValidation(
        () => {
            toast.success("Validación completada");
            navigateToNextStep(6); // Avanza al siguiente paso solo si la validación es exitosa
        },
        (error) => console.error("Error al crear validación:", error)
    );

    const onSubmit = (data) => {
        verifyPhone({ code: data.otpCode });
    };

    const handleResend = () => {
        resendOtpPhone();
    };

    if (isSubmitting || isLoadingPhone) {
        return <Loading />;
    }

    return (
        <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8'>
            <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col space-y-12'>
                    <div className='flex flex-col space-y-5'>
                        <TitlePage title={`Te enviamos un código ${phoneSecure}`} />
                        <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>Ingresa el código OTP que te enviamos por mensaje</p>
                    </div>
                    <div className='flex-col space-y-3'>
                        <TextField
                            type='text'
                            label='Código OTP'
                            placeholder='Ingresa el código'
                            name='otpCode'
                            errorMessage={errors.otpCode?.message}
                        />
                        <Button
                            variant='light'
                            className='px-0 font-rubik font-medium text-xs text-purple-heart-700 data-[hover=true]:bg-default/0'
                            onClick={handleResend}
                        >
                            Reenviar código
                        </Button>
                    </div>
                    <Button1
                        handleSubmit={handleSubmit(onSubmit)}
                        label="Verificar Teléfono"
                    />
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            </CustomFormProvider>
        </div>
    );
}

export default VerificacionTelefono