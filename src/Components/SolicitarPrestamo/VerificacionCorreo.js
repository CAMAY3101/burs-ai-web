import React from 'react';
import { Button } from "@heroui/react";
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../../Contexts/authContext';
import { useSecureEmailQuery, useVerifyEmail, useResendOtpEmail, useSendOtpPhone } from "../../hooks/useQueryHooks";
import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';
import { email_Verification } from '../../Config/Schemas/yupSchemas.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Loading from '../CustomizeComponents/Loading.jsx'

function VerificacionCorreo() {
  const { navigateToNextStep } = useAuthContext();

  const defaultValues = {
    otpCode: '',
  };

  const methods = useForm({
    resolver: yupResolver(email_Verification),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = methods;

  const otpCode = watch('otpCode');

  const onSuccess = async (response) => {
    setTimeout(() => {
      toast.success("Correo verificado con éxito");
      sendOtpPhone();
    }, 2000);
  };

  const onError = (error) => {
    console.error("Error al verificar el correo:", error);
  };

  const { data: secureEmailData, isLoading: isLoadingEmail } = useSecureEmailQuery(
    () => { },
    () => toast.error("No se pudo obtener el correo seguro")
  );

  const emailSecure = secureEmailData?.data?.email
  ? `al correo ${secureEmailData.data.email}`
  : "a tu correo";

  const { mutate: verifyEmail, isLoading: isVerifyEmail } = useVerifyEmail(onSuccess, onError);

  const { mutate: resendOtpCode } = useResendOtpEmail(
    () => toast.success("Código reenviado"),
    () => toast.error("Error al reenviar el código")
  );

  const { mutate: sendOtpPhone } = useSendOtpPhone(
    () => {
      navigateToNextStep(5);
    },
    onError);

  const onSubmit = (data) => {
    verifyEmail({ code: data.otpCode });
  };

  const handleResend = () => {
    resendOtpCode();
  };

  if (isSubmitting || isVerifyEmail || isLoadingEmail) {
    return <Loading />;
  }

  return (
    <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8'>
      <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-12'>
          <div className='flex flex-col space-y-5'>
            <TitlePage title={`Te enviamos un código ${emailSecure}`} />
            <p className='w-3/4 font-rubik font-medium text-sm text-dark-blue-800'>
              Ingresa el código OTP que te enviamos por correo
            </p>
          </div>
          <div className='flex-col space-y-3'>
            <TextField
              type='text'
              name='otpCode'
              label='Código OTP'
              placeholder='Ingresa el código'
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
            isDisabled={isSubmitting}
            handleSubmit={handleSubmit(onSubmit)}
            label="Verificar Correo"
          />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </CustomFormProvider>
    </div>
  );
}

export default VerificacionCorreo;
