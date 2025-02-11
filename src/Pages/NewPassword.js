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
import { useLoginQuery } from '../hooks/useQueryHooks';

import CustomFormProvider from '../Components/CustomizeComponents/Form/CustomFormProvider';
import TextFieldWithLabelInside from '../Components/CustomizeComponents/TextFieldWithLabelInside';

function NewPassword() {
  const { login, verificationStep } = useAuthContext();
  const [isVisible] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const defaultValues = {
    contrasena: '',
    newcontrasena: '',
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

  React.useEffect(() => {
    const passwordsMatch = values.newcontrasena === values.contrasena;
    setIsButtonDisabled(!passwordsMatch);
  }, [values.newcontrasena, values.contrasena]);

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
    console.log('data: ', data);
    loginQuery.mutate(data);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 my-9">
        <Link to="/">
          <img className="w-20" alt="icon-color-burs" src={bursColorIcon} />
        </Link>
        <h1 className="font-rubik font-bold text-xl text-purple-heart-950">Restablece tu contraseña</h1>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col space-y-10 mx-auto px-6 py-4">
        <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <TextFieldWithLabelInside
              type="password"
              name="newcontrasena"
              label="Contraseña"
              placeholder="Nueva contraseña"
              errorMessage={errors.newcontrasena?.message || messageError}
              isPasswordField={true}
              visibleEyeIcon={visibleEyeIcon}
              invisibleEyeIcon={invisibleEyeIcon}
              isVisible={isVisible}
            />
            <TextFieldWithLabelInside
              type="password"
              name="contrasena"
              label="Contraseña"
              placeholder="Vuelve a escribir la contraseña"
              errorMessage={errors.contrasena?.message || messageError}
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
            isDisabled={isButtonDisabled || isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            Siguiente
          </Button>
        </div>
        <div className="text-[10px]">{messageError}</div>
      </div>
    </div>
  );
}

export default NewPassword;
