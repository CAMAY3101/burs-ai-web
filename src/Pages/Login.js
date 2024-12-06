import React from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Input, Button } from "@nextui-org/react"

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

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Email validation
  const [emailValue, setEmailValue] = React.useState('');
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (emailValue === '') return false;
    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  // Password validation
  const [password, setPassword] = React.useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const isLongEnough = password.length >= 8;

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

  // Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    loginQuery.mutate({
      correo: emailValue,
      contrasena: password,
    })
  };
  return (
    <div className=''>
      <div className='flex flex-col items-center space-y-2 my-9'>
        <Link to = '/'>
          <img className='w-20' alt='icon-color-burs' src={bursColorIcon} />
        </Link>
        <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Iniciar Sesion</h1>
      </div>
      <div className='max-w-xl mx-auto flex flex-col items-center space-y-8 my-4'>
        <TextFieldWithLabelInside
          type='email'
          label='Correo Electrónico'
          placeholder='ejemplo@outlook.com'
          value={emailValue}
          errorMessage={"Ingresa un correo válido."}
          onValueChange={setEmailValue}
        />
        <TextFieldWithLabelInside
          type='password'
          label='Contraseña'
          placeholder='Ingresa contraseña'
          value={password}
          errorMessage={"Ingresa una contraseña valida"}
          onValueChange={setPassword}
          isPasswordField={true}
          visibleEyeIcon={visibleEyeIcon}
          invisibleEyeIcon={invisibleEyeIcon}
        />
        <Button
          size='md'
          className='w-10/12 bg-purple-heart-500 text-purple-50 rounded-3xl'
          isDisabled={isInvalid || !isLongEnough || emailValue === '' || password === ''}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
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