import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import { Button } from "@nextui-org/react"
import toast, { Toaster } from 'react-hot-toast';
import { login_form } from '../Config/Schemas/yupSchemas';
import bursColorIcon from "../Assets/icons/burs-color-icon.png"
import thickIcon from "../Assets/icons/tick-icon.png"
import visibleEyeIcon from "../Assets/icons/visible-eye.png"
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png"
import TextFieldWithLabelInside from '../Components/CustomizeComponents/TextFieldWithLabelInside'
import FormProvider from '../Components/CustomizeComponents/Form/FormProvider';

import { useAuthContext } from '../Contexts/authContext';
import { LOGIN } from '../Config/Router/paths';
import { Link } from 'react-router-dom';
import { useCreateUser } from '../hooks/useQueryHooks';

axios.defaults.withCredentials = true;

function SignUp() {

    const { checkToken, navigateToNextStep, verificationStep } = useAuthContext();
    const [emailValue, setEmailValue] = React.useState('');
    const [password, setPassword] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    // const [errors, setErrors] = useState({});
    const [passwordChecks, setPasswordChecks] = useState({
        isLongEnough: false,
        hasLowerCase: false,
        hasUpperCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

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

  const { mutate: createUser, isLoading } = useCreateUser();
        // Validar contraseña dinámicamente
        useEffect(() => {
            setPasswordChecks({
                isLongEnough: password.length >= 8,
                hasLowerCase: /[a-z]/.test(password),
                hasUpperCase: /[A-Z]/.test(password),
                hasNumber: /[0-9]/.test(password),
                hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            });
        }, [password]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formValues = {
            correo: emailValue,
            contrasena: password,
        };

        try {
            await login_form.validate(formValues, { abortEarly: false });
            setErrors({}); // Limpiar errores previos
            createUser(formValues, {
                onSuccess: async (response) => {
                  toast.success('Creación de usuario exitosa');
                  await checkToken();
                  navigateToNextStep(1);
                  toast.success(`Verification step: ${verificationStep}`);
                },
                onError: (error) => {
                    if (error.response?.status === 400) {
                      toast.error(error.response.data.message || 'Error al crear usuario');
                    } else {
                      toast.error('Error al crear usuario, intente de nuevo');
                    }
                  },
                });

        } catch (error) {
            if (error.name === 'ValidationError') {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else if (error.response?.status === 400) {
                toast.error(error.response.data.message || 'Error al crear usuario');
            } else {
                toast.error('Error al crear usuario, intente de nuevo');
            }
            console.error(error);
        }
    };
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center space-y-2 my-9'>
                <Link to='/'>
                    <img className='w-20' alt='icon-color-burs' src={bursColorIcon} />
                </Link>
                <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Crea tu cuenta</h1>
            </div>
            <div className='w-10/12 space-y-8 py-4'>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextFieldWithLabelInside
                        type='email'
                        name='correo'
                        label='Correo Electrónico'
                        placeholder='ejemplo@outlook.com'
                        value={emailValue}
                        errorMessage={errors.correo}
                        onValueChange={setEmailValue}
                    />
                    <div className='space-y-4'>
                        <TextFieldWithLabelInside
                            type='password'
                            label='Contraseña'
                            name='contrasena'
                            placeholder='Ingresa contraseña'
                            value={password}
                            errorMessage={errors.contrasena}
                            onValueChange={setPassword}
                            isPasswordField={true}
                            visibleEyeIcon={visibleEyeIcon}
                            invisibleEyeIcon={invisibleEyeIcon}
                        />
                        <ul className="space-y-1 pl-2 font-rubik font-regular text-[10px]">
                            <li className={`flex flex-row ${passwordChecks.isLongEnough ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                                <div className={`w-3 h-3 mr-1 ${passwordChecks.isLongEnough ? 'block' : 'hidden'}`}>
                                    <img src={thickIcon} alt='icon' />
                                </div>
                                <p>Contraseña debe tener mínimo 8 caracteres.</p>
                            </li>
                            <li className={`flex flex-row ${passwordChecks.hasLowerCase ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                                <div className={`w-3 h-3 mr-1 ${passwordChecks.hasLowerCase ? 'block' : 'hidden'}`}>
                                    <img src={thickIcon} alt='icon' />
                                </div>
                                <p>Al menos una letra minúscula </p>
                            </li>
                            <li className={`flex flex-row ${passwordChecks.hasUpperCase ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                                <div className={`w-3 h-3 mr-1 ${passwordChecks.hasUpperCase ? 'block' : 'hidden'}`}>
                                    <img src={thickIcon} alt='icon' />
                                </div>
                                <p>Al menos una letra mayúscula.</p>
                            </li>
                            <li className={`flex flex-row ${passwordChecks.hasNumber ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                                <div className={`w-3 h-3 mr-1 ${passwordChecks.hasNumber ? 'block' : 'hidden'}`}>
                                    <img src={thickIcon} alt='icon' />
                                </div>
                                <p>Al menos un número </p>
                            </li>
                            <li className={`flex flex-row ${passwordChecks.hasSpecialChar ? 'text-purple-heart-950' : 'text-purple-heart-950/50'}`}>
                                <div className={`w-3 h-3 mr-1 ${passwordChecks.hasSpecialChar ? 'block' : 'hidden'}`}>
                                    <img src={thickIcon} alt='icon' />
                                </div>
                                <p>Al menos un caracter especial</p>
                            </li>
                        </ul>
                    </div>
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY}
                        onChange={(value) => setRecaptchaValue(value)}
                    />
                </div>
            </FormProvider>
                <div className="flex justify-center">
                    <Button
                        size='md'
                        className='w-10/12 bg-purple-heart-500 text-purple-50 rounded-3xl'
                        isDisabled={!recaptchaValue || Object.keys(errors).length > 0}
                        onClick={handleSubmit}
                    >
                        Crear Cuenta
                    </Button>
                </div>
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