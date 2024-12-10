import React from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react"
import { login_form } from '../Config/Schemas/yupSchemas';
import bursColorIcon from "../Assets/icons/burs-color-icon.png"
import visibleEyeIcon from "../Assets/icons/visible-eye.png"
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png"

import { useAuthContext } from '../Contexts/authContext';
import { SIGNUP } from '../Config/Router/paths';
import { useLoginQuery } from '../hooks/useQueryHooks';
import TextFieldWithLabelInside from '../Components/CustomizeComponents/TextFieldWithLabelInside'


function LogIn() {

  const { checkToken, login, verificationStep} = useAuthContext();
  const [isVisible, setIsVisible] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');
  const [errors, setErrors] = React.useState({});

  // Email validation
  const [emailValue, setEmailValue] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSuccess = async (response) => {
    if (response.data.status === 'success') {
      setMessageError(`verification step: ${verificationStep}`);
      setTimeout(() => {
        login(response.data.progress);
      }, 2000);
    }
  };

  const onError = (error) => {
    if (error.response === undefined) {
      setMessageError('Error de conexión. Inténtalo de nuevo más tarde.');
    } else {
      setMessageError('Correo o contraseña incorrectos.');
    }
  };

  const loginQuery = useLoginQuery(onSuccess, onError)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valuesToValidate = {
      correo: emailValue,
      contrasena: password,
    };
    try {
      await login_form.validate(valuesToValidate, { abortEarly: false });
      setErrors({}); 

      loginQuery.mutate(valuesToValidate);
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Error al enviar el formulario:", error);
      }
    }
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center space-y-2 my-9'>
        <Link to = '/'>
          <img className='w-20' alt='icon-color-burs' src={bursColorIcon} />
        </Link>
        <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Iniciar Sesion</h1>
      </div>
      <div className='w-10/12 space-y-8 my-4'>
        <TextFieldWithLabelInside
          type='email'
          label='Correo Electrónico'
          placeholder='ejemplo@outlook.com'
          value={emailValue}
          errorMessage={errors.correo}
          onValueChange={setEmailValue}
        />
        <TextFieldWithLabelInside
          type='password'
          label='Contraseña'
          placeholder='Ingresa contraseña'
          value={password}
          errorMessage={errors.contrasena}
          onValueChange={setPassword}
          isPasswordField={true}
          visibleEyeIcon={visibleEyeIcon}
          invisibleEyeIcon={invisibleEyeIcon}
          isVisible={isVisible}
        />
        <div className="flex justify-center">
        <Button
          size='md'
          className='w-10/12 bg-purple-heart-500 text-purple-50 rounded-3xl'
          isDisabled={emailValue === '' || password === '' || Object.keys(errors).length > 0}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
        </div>
        <div className='flex flex-col items-start w-10/12'>
          <p className='font-rubik font-light text-sm text-dark-blue-950'>
            ¿No tienes una cuenta?  
            <a  className='text-dark-blue-700 font-normal' href={SIGNUP}> Registrate</a>
          </p>
        </div>
        <div className='text-[10px]'>{messageError}</div>
      </div>
    </div>
  )
}

export default LogIn