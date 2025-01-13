import React from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Button } from "@nextui-org/react";
import { login_form } from '../Config/Schemas/yupSchemas';
import bursColorIcon from "../Assets/icons/burs-color-icon.png";
import visibleEyeIcon from "../Assets/icons/visible-eye.png";
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png";

import { useAuthContext } from '../Contexts/authContext';
import { SIGNUP, RECOVERPASSWORD } from '../Config/Router/paths';
import { useLoginQuery } from '../hooks/useQueryHooks';

import CustomFormProvider from '../Components/CustomizeComponents/Form/CustomFormProvider';
import TextFieldWithLabelInside from '../Components/CustomizeComponents/TextFieldWithLabelInside';

function LogIn2() {
  const { login, verificationStep } = useAuthContext();
  const [isVisible, setIsVisible] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');

  const defaultValues = {
    correo: '',
    contrasena: '',
  };

  const methods = useForm({
    resolver: yupResolver(login_form),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  const onSuccess = async (response) => {
    if (response.data.status === 'success') {
      setMessageError(`verification step: ${verificationStep}`);
      setTimeout(() => {
        login(response.data.progress);
      }, 2000);
    }
  };

  const onError = (error) => {
    if (!error.response) {
      setMessageError('Error de conexión. Inténtalo de nuevo más tarde.');
    } else {
      setMessageError('Correo o contraseña incorrectos.');
    }
  };

  const loginQuery = useLoginQuery(onSuccess, onError);

  const onSubmit = (data) => {
    console.log('data: ', data)
    loginQuery.mutate(data);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 my-9">
        <Link to="/">
          <img className="w-20" alt="icon-color-burs" src={bursColorIcon} />
        </Link>
        <h1 className="font-rubik font-bold text-xl text-purple-heart-950">Iniciar Sesión</h1>
      </div>
      <div className="w-full sm:w-1/2 md:w-3/5 lg:w-5/12 flex flex-col space-y-10 mx-auto px-6 py-4">
        <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <TextFieldWithLabelInside
              type="email"
              name="correo"
              label="Correo Electrónico"
              placeholder="ejemplo@outlook.com"
              errorMessage={errors.correo?.message}
            />
            <TextFieldWithLabelInside
              type="password"
              name="contrasena"
              label="Contraseña"
              placeholder="Ingresa contraseña"
              errorMessage={errors.contrasena?.message || messageError}
              isPasswordField={true}
              visibleEyeIcon={visibleEyeIcon}
              invisibleEyeIcon={invisibleEyeIcon}
              isVisible={isVisible}
            />
          </div>
        </CustomFormProvider>
        <div className="flex justify-center">
          <Button
            type='submit'
            size="md"
            className="w-10/12 bg-purple-heart-500 text-purple-50 rounded-3xl"
            isDisabled={isSubmitting}
            onClick={handleSubmit(onSubmit)} // Manejo manual del clic
          >
            Ingresar
          </Button>
        </div>
        <div className="flex flex-col items-start w-10/12">
          <p className="font-rubik font-light text-sm text-dark-blue-950">
            ¿No tienes una cuenta?
            <a className="text-dark-blue-700 font-normal" href={SIGNUP}> Regístrate</a>
          </p>
          <p>
            <a className="text-dark-blue-700 font-normal" href={RECOVERPASSWORD}>¿Olvidaste tu Contraseña?</a>
          </p>
        </div>
        <div className="text-[10px]">{messageError}</div>
      </div>
    </div>
  );
}

export default LogIn2;
