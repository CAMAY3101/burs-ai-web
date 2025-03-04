import React, { useEffect, useState } from 'react';
import { Button } from "@heroui/react";
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

    const { mutate: verifyPhone } = useVerifyPhone(
        () => {
            toast.success("Teléfono verificado");
            generateToken();
        },
        onError
    );

    const { mutate: resendOtpPhone } = useResendOtpPhone(
        () => toast.success("Código reenviado"),
        () => toast.error("Error al reenviar el código")
    );

    const { mutate: generateToken } = useGenerateToken(
        async () => {
            checkToken();
            await createValidation();
            navigateToNextStep(5);
        },
        (error) => console.error("Error al generar token:", error)
    );

    const { mutate: createValidation } = useCreateValidation(
        () => {
            toast.success("Validación completada");
            navigateToNextStep(5);
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

                        <Button
                            variant='light'
                            className='self-start px-0 font-rubik font-medium text-xs text-purple-heart-400 data-[hover=true]:bg-default/0'
                        >
                            Editar Número
                        </Button>

                        <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>
                            Ingresa el código OTP que te enviamos por mensaje
                        </p>
                        <div className='flex flex-col space-y-0 items-start'>
  <p className='m-0 font-rubik text-[10px] text-dark-blue-300 text-left'>
    Por este conducto autorizo expresamente a BURS FINANCIERA MEXICANA SAPI DE CV, para que, a través de sus funcionarios facultados, realice las investigaciones correspondientes sobre mi comportamiento e historial crediticio, ante las Sociedades de información Crediticia.
  </p>
  <Button
    variant='light'
    className='block self-start m-0 px-0 font-rubik font-medium text-xs text-purple-heart-500 text-left data-[hover=true]:bg-default/0'
  >
    Ver más
  </Button>
</div>


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
                        label="Autorizar"
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
