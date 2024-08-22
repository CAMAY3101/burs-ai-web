import React from 'react'
import axios from 'axios';

import { Input, Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';

import bursColorIcon from "../Assets/icons/burs-color-icon.png"
import visibleEyeIcon from "../Assets/icons/visible-eye.png"
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png"

import { useAuthContext } from '../Contexts/authContext';
import { SIGNUP } from '../Config/Router/paths';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

const styles_input = {
  base: [
    "w-10/12",
  ],
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
    "space-y-8",
    //"py-6",
  ]
};

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


  // Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.burs.com.mx/usuarios/login', {
        correo: emailValue,
        contrasena: password,
      }, { withCredentials: true });

      await checkToken();
      console.log('Response:', response.data);

      if (response.data.status === 'success') {
        toast.success('Inicio de sesión exitoso');
        setMessageError(`verification step: ${verificationStep}`);
        setTimeout(() => {
          login(response.data.progress);
        }, 2000);
      }

    } catch (error) {
      // si hay un error porque hay un error de conexión o un error en el servidor, asigna el error a messageError
      if (error.response === undefined) {
        setMessageError('Error de conexión. Inténtalo de nuevo más tarde.');
      } else {
        setMessageError('Correo o contraseña incorrectos.');
      }
    }

  };
  return (
    <div className=''>
      <div className='flex flex-col items-center space-y-2 my-9'>
        <Link to = '/'>
          <img className='w-20' alt='icon-color-burs' src={bursColorIcon} />
        </Link>
        <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Iniciar Sesion</h1>
      </div>
      <div className='flex flex-col items-center space-y-8 my-4'>
        <Input
          isRequired
          type='email'
          label='Correo Electrónico'
          placeholder='ejemplo@outlook.com'
          size='lg'
          variant='bordered'
          classNames={styles_input}
          value={emailValue}
          errorMessage={isInvalid && "Ingresa un correo válido."}
          onValueChange={setEmailValue}
        />
        <Input
          isRequired
          label='Contraseña'
          placeholder='Ingresa contraseña'
          size='lg'
          variant='bordered'
          classNames={styles_input}
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <img src={invisibleEyeIcon} alt='Hide Password' className=' w-6' />
              ) : (
                <img src={visibleEyeIcon} alt='Show Password' className='w-6' />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}

          value={password}
          onChange={handleChange}
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
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div className='text-[10px]'>{messageError}</div>
      </div>
    </div>
  )
}

export default LogIn