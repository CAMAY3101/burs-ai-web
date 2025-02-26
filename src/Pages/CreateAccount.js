import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from "@heroui/react";
import toast, { Toaster } from 'react-hot-toast';
import { create_form } from '../Config/Schemas/yupSchemas';
import bursColorIcon from "../Assets/icons/burs-color-icon.png"
import thickIcon from "../Assets/icons/tick-icon.png"
import visibleEyeIcon from "../Assets/icons/visible-eye.png"
import invisibleEyeIcon from "../Assets/icons/invisible-eye.png"
import TextFieldWithLabelInside from '../Components/CustomizeComponents/TextFieldWithLabelInside'
import CustomFormProvider from '../Components/CustomizeComponents/Form/CustomFormProvider';

import { useAuthContext } from '../Contexts/authContext';
import { LOGIN } from '../Config/Router/paths';
import { Link } from 'react-router-dom';
import { useCreateUser } from '../hooks/useQueryHooks';



function SignUp() {

    const { checkToken, navigateToNextStep, verificationStep } = useAuthContext();
    const [isVisible, setIsVisible] = React.useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [passwordChecks, setPasswordChecks] = useState({});

    const defaultValues = {
        correo: '',
        contrasena: '',
    };

    const methods = useForm({
        resolver: yupResolver(create_form),
        defaultValues,
    });

    const {
        handleSubmit,
        watch,
        formState: { isSubmitting, errors },
    } = methods;

    const values = watch()

    // Validar contraseña dinámicamente
    useEffect(() => {
        const currentPassword = watch('contrasena') || '';
        setPasswordChecks({
            isLongEnough: currentPassword.length >= 8,
            hasLowerCase: /[a-z]/.test(currentPassword),
            hasUpperCase: /[A-Z]/.test(currentPassword),
            hasNumber: /[0-9]/.test(currentPassword),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>+--]/.test(currentPassword),
        });
    }, [watch('contrasena')]);

    const onSuccess = async (response) => {
        toast.success('Creación de usuario exitosa');
        await checkToken();
        navigateToNextStep(1);
        toast.success(`Verification step: ${verificationStep}`);
    };

    const onError = (error) => {
        if (!error.response) {
            toast.error('Error de conexión. Inténtalo de nuevo más tarde.');
        } else if (error.response.data?.message === 'El correo electrónico ya esta registrado') {
            toast.error('El correo electrónico ya está registrado. Intenta con otro.');
        }
    }

    const createUserQuery = useCreateUser(onSuccess, onError);

    const onSubmit = (data) => {
        console.log('values 2: ', values)
        console.log('data: ', data)
        createUserQuery.mutate(data);
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center space-y-2 my-9'>
                <Link to='/'>
                    <img className='w-20' alt='icon-color-burs' src={bursColorIcon} />
                </Link>
                <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Crea tu cuenta</h1>
            </div>
            <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col space-y-10 mx-auto px-6 py-4'>
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
                            errorMessage={errors.contrasena?.message}
                            isPasswordField={true}
                            visibleEyeIcon={visibleEyeIcon}
                            invisibleEyeIcon={invisibleEyeIcon}
                            isVisible={isVisible}
                        />
                    </div>
                </CustomFormProvider>

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
                <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY || "recaptcha-sitekey"}
                    onChange={(value) => setRecaptchaValue(value)}
                />
                <div className="flex justify-center">
                    <Button
                        size='md'
                        type='submit'
                        className='w-10/12 bg-purple-heart-500 text-purple-50 rounded-3xl'
                        isDisabled={!recaptchaValue || Object.keys(errors).length > 0 || isSubmitting}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Crear Cuenta
                    </Button>
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className='flex flex-col items-start w-10/12'>
                    <p className='font-rubik font-light text-sm text-dark-blue-950'>
                        ¿Ya tienes una cuenta?
                        <a className='text-dark-blue-700 font-normal' href={LOGIN}> Inicia Sesión</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
