import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

import {Input, Button} from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';

import bursColorIcon from "../Assets/icons/burs-color-icon.png"
import thickIcon from "../Assets/icons/tick-icon.png"
import visibleEyeIcon from "../Assets/icons/visible-eye.png"
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png"

import { useAuthContext } from '../Contexts/authContext';
import { LOGIN } from '../Config/Router/paths';
import { Link } from 'react-router-dom';

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

function SignUp() {

    const { checkToken, navigateToNextStep, verificationStep } = useAuthContext();

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

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    // Captcha
    const [recaptchaValue, setRecaptchaValue] = React.useState(null);

    // Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('https://bursapi.com/usuarios/createUser', {
                correo: emailValue,
                contrasena: password,
            }, { withCredentials: true });

            await checkToken();

            if (response.data.status === 'success') {
                toast.success('Creación de usuario exitosa');
                setTimeout(() => {
                    navigateToNextStep(1);
                    toast.success(`verification step: ${verificationStep}`);
                }, 2000);
            }

        } catch (error) {
            if(error.response.status === 400){
                toast.error(error.response.data.message)
                //toast.error(error.response.data.error)
            }
            else{
                toast.error('Error al crear usuario, intente de nuevo')
            }
            console.log(error)
        }
        
    };
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center space-y-2 my-9'>
            <Link to = '/'>
                <img className='w-20' alt='icon-color-burs' src={bursColorIcon}/>
            </Link>
            <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Crea tu cuenta</h1>
        </div>
        <div className='w-10/12 space-y-8 py-4'>
            <Input
                isRequired
                type='email'
                label = 'Correo Electrónico'
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
                <ul className="space-y-1 pl-2 font-rubik font-regular text-[10px]">
                    <li className={`flex flex-row ${isLongEnough ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}` }>
                        <div className={`w-3 h-3 mr-1 ${isLongEnough ? 'block' : 'hidden'}`}>
                            <img src={thickIcon} alt='icon'/>
                        </div>
                        <p>Contraseña debe tener mínimo 8 caracteres.</p>
                    </li>
                    <li className={`flex flex-row ${hasLowerCase ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                        <div className={`w-3 h-3 mr-1 ${hasLowerCase ? 'block' : 'hidden'}`}>
                            <img src={thickIcon} alt='icon' />
                        </div>
                        <p>Al menos una letra minúscula </p>
                    </li>
                    <li className={`flex flex-row ${hasUpperCase ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                        <div className={`w-3 h-3 mr-1 ${hasUpperCase ? 'block' : 'hidden'}`}>
                            <img src={thickIcon} alt='icon' />
                        </div>
                        <p>Al menos una letra mayúscula.</p>
                    </li>
                    <li className={`flex flex-row ${hasNumber ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                        <div className={`w-3 h-3 mr-1 ${hasNumber ? 'block' : 'hidden'}`}>
                            <img src={thickIcon} alt='icon' />
                        </div>
                        <p>Al menos un número </p>
                    </li>
                    <li className={`flex flex-row ${hasSpecialChar ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                        <div className={`w-3 h-3 mr-1 ${hasSpecialChar ? 'block' : 'hidden'}`}>
                            <img src={thickIcon} alt='icon' />
                        </div>
                        <p>Al menos un caracter especial</p>
                    </li>
                </ul>
            </div>
            <ReCAPTCHA
                sitekey='6LfSz3ApAAAAAMEcI9ZZbOn0jHZotcLlNOpCTSsp'
                onChange={(value) => setRecaptchaValue(value)}
            />
            <Button
                size='md'
                className='w-full bg-purple-heart-500 text-purple-50 rounded-3xl'
                isDisabled={isInvalid || !isLongEnough || !hasLowerCase || !hasUpperCase || !hasNumber || !hasSpecialChar || !recaptchaValue}
                onClick={handleSubmit}
            >
                Crear Cuenta
            </Button>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
        <div className='flex flex-col items-start w-10/12 mt-4'>
            <p className='font-rubik font-light text-sm text-dark-blue-950'>
                ¿Ya tienes una cuenta?
                <a className='text-dark-blue-700 font-normal' href={LOGIN}> Inicia Sesión</a>
            </p>
        </div>
    </div>
  )
}

export default SignUp