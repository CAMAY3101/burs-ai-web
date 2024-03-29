import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

import bursColorIcon from "../../Assets/icons/burs-color-icon.png"
import thickIcon from "../../Assets/icons/tick-icon.png"

import {Input, Button} from "@nextui-org/react"

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
        "space-y-8"
    ]
};

function CreaTuCuenta() {
    const [showMessage, setShowMessage] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const navigate = useNavigate();

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
    const handleSubmit = async () => {
        try{
            const response = await axios.post('http://localhost:3001/usuarios/createUser', {
                correo: emailValue,
                contrasena: password,
            });
            // Maneja la respuesta del backend
            if (response.data.message === 'Usuario creado con éxito') {
                console.log('Usuario creado con éxito');
                // Puedes redirigir a otra página o mostrar un mensaje de éxito
                const id_usuario = response.data.id_usuario;
                console.log('id_usuario:', id_usuario);
                navigate(`/ingresar-datos/${id_usuario}`);

            } else {
                console.error('Error al crear el usuario:', response.data.error);
                // Puedes mostrar un mensaje de error al usuario
            }
        } catch (error) {
            setShowMessage(!showMessage);
            setMessage('Error al crear el usuario: ' + error);
            console.error('Error al crear el usuario:', error);
        }
    };                        

  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center space-y-2 my-9'>
            <img className='w-20' alt='icon-color-burs' src={bursColorIcon}/>
            <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Crea tu cuenta</h1>
        </div>
        <div className='w-10/12 space-y-8 py-4'>
            <Input
                isRequired
                type='email'
                label = 'Correo Electrónico'
                placeholder='ejemplo@outlook.com'
                size='md'
                variant='bordered'
                classNames={styles_input}
                value={emailValue}
                errorMessage={isInvalid && "Ingresa un correo válido."}
                onValueChange={setEmailValue}
            />
            <div className='space-y-4'>
                <Input
                    isRequired
                    type='password'
                    label='Contraseña'
                    placeholder='Ingresa contraseña'
                    size='md'
                    variant='bordered'
                    classNames={styles_input}

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
              {showMessage && <p className="text-sm mt-4">{message}</p>}
        </div>
    </div>
  )
}

export default CreaTuCuenta