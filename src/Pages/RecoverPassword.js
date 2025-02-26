import React from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import VerificacionCorreo from '../Components/SolicitarPrestamo/VerificacionCorreo';

import { Button } from "@heroui/react"; ;
import { login_form } from '../Config/Schemas/yupSchemas';
import bursColorIcon from "../Assets/icons/burs-color-icon.png";

import { useAuthContext } from '../Contexts/authContext';
import { useLoginQuery } from '../hooks/useQueryHooks';

import CustomFormProvider from '../Components/CustomizeComponents/Form/CustomFormProvider';
import TextFieldWithLabelInside from '../Components/CustomizeComponents/TextFieldWithLabelInside';

function RecoverPassword() {
  const { login, verificationStep } = useAuthContext();
  const [messageError, setMessageError] = React.useState('');

  const defaultValues = {
    correo: '',
  };
  // hacer unQuerryHoook para recoverpassword
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
  //Cambiar onSucces
  const onSuccess = async (response) => {
    if (response.data.status === 'success') {
      <VerificacionCorreo />
    }
  };

  const onError = (error) => {
    if (!error.response) {
      setMessageError('Error de conexión. Inténtalo de nuevo más tarde.');
    } else {
      setMessageError('Correo no encontrado.');
    }
  };

  //Cambiar el useLoginQuerry
  const RecoverPasswordQuery = useLoginQuery(onSuccess, onError);

  const onSubmit = (data) => {
    console.log('data: ', data)
    RecoverPassword.mutate(data);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 my-9">
        <Link to="/">
          <img className="w-20" alt="icon-color-burs" src={bursColorIcon} />
        </Link>
        <h1 className="font-rubik font-bold text-xl text-purple-heart-950">Recupera tu Contraseña</h1>
        <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col space-y-10 mx-auto px-6 py-4">
        <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <TextFieldWithLabelInside
              type="email"
              name="correo"
              label="Correo Electrónico"
              placeholder="ejemplo@outlook.com"
              errorMessage={errors.correo?.message}
            />
          </div>
        </CustomFormProvider>
        <div className="flex justify-center">
          <Button
            type='submit'
            size="md"
            className="w-10/12 bg-purple-heart-500 text-purple-50 rounded-3xl"
            isDisabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            Buscar
          </Button>
        </div>
        <div className="text-[10px]">{messageError}</div>
      </div>
    </div>
  );
}

export default RecoverPassword;
