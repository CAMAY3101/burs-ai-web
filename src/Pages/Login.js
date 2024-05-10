import React from 'react'
import axios from 'axios';

import { Input, Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';

import bursColorIcon from "../Assets/icons/burs-color-icon.png"
import visibleEyeIcon from "../Assets/icons/visible-eye.png"
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png"

import { useAuthContext } from '../Contexts/authContext';

axios.defaults.withCredentials = true;

const styles_input = {
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

  const { login} = useAuthContext();

  const [isVisible, setIsVisible] = React.useState(false);

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
  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://bursapi.com/usuarios/login', {
        correo: emailValue,
        contrasena: password,
      }, { withCredentials: true });

      if (response.data.status === 'success') {
        login(response.data.progress);
      }

    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message)
      }
      else {
        toast.error('Error al crear usuario, intente de nuevo')
      }
      console.log(error)
    }

  };
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center space-y-2 my-9'>
        <img className='w-20' alt='icon-color-burs' src={bursColorIcon} />
        <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Iniciar Sesion</h1>
      </div>
      <div className='w-10/12 space-y-8 py-4'>
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
        <div className='space-y-4'>
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
          
        </div>
        <Button
          size='md'
          className='w-full bg-purple-heart-500 text-purple-50 rounded-3xl'
          isDisabled={isInvalid || !isLongEnough || emailValue === '' || password === ''}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  )
}

export default LogIn