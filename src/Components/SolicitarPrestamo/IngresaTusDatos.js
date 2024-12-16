import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { usePhoneInput, FlagImage, defaultCountries, parseCountry, } from "react-international-phone";
import 'react-international-phone/style.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';
import { Input, Select, SelectItem } from "@nextui-org/react"
import toast from 'react-hot-toast';
import { datos_form } from '../../Config/Schemas/yupSchemas.js';

import { useAuthContext } from '../../Contexts/authContext';
import { useUpdateUserQuery } from '../../hooks/useQueryHooks.js';
import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';
import Loading from '../CustomizeComponents/Loading.jsx';

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
    ]
};

function IngresaTusDatos() {
    //----------------------Variables----------------------
    const { navigateToNextStep } = useAuthContext();

    const defaultValues = {
        name: '',
        lastName: '',
        age: '',
        phone: ''
    };

    const methods = useForm({
        resolver: yupResolver(datos_form),
        defaultValues,
    });

    const {
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = methods;

    const values = watch();
    console.log('values: ', values)

    //----------------------coneccion API----------------------

    const onSuccess = async (response) => {
        toast.success('Datos actualizados correctamente');
        navigateToNextStep(2);
      };
    
      const onError = (error) => {
        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error('Error al actualizar los datos del usuario');
        }
        console.error('Error API:', error);
      };
    
      const updateDataUserQuery = useUpdateUserQuery(onSuccess, onError);
    
      const onSubmit = (data) => {
        console.log('data: ', data)

        const payload = {
            nombre: data.name,
            apellidos: data.lastName,
            edad: data.age,
            telefono: data.phone
        }
        updateDataUserQuery.mutate(payload);
      };

    return (
        <>
            {isSubmitting ? <Loading/> : 
                <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
                    <TitlePage title="Ingresa tus datos" />
                    <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex-col space-y-12'>
                            <div>
                                <TextField
                                    type='text'
                                    name='name'
                                    label='Nombre(s)'
                                    placeholder='Ejemplo: Juan'
                                    errorMessage={errors.name?.message}
                                />
                            </div>
                            <div>
                                <TextField
                                    type='text'
                                    name='lastName'
                                    label='Apellido(s)'
                                    placeholder='Ejemplo: Perez Lopez'
                                    errorMessage={errors.lastName?.message}
                                />
                            </div>
                            <div className='w-1/2'>
                                <TextField
                                    type='number'
                                    name='age'
                                    label='Edad'
                                    placeholder='Ej: 25'
                                    className='w-1/2'
                                    min={18}
                                    max={100}
                                    errorMessage={errors.age?.message}
                                />
                            </div>
                            <div>
                                <TextField
                                    type='text'
                                    name='phone'
                                    label='Telefono'
                                    placeholder='Ej: 5560607070'
                                    errorMessage={errors.phone?.message}
                                />
                            </div>
                            <Button1
                                isDisabled={isSubmitting}
                                handleSubmit={handleSubmit(onSubmit)}
                            />
                        </div>
                    </CustomFormProvider >
                </div >
            }
        </>
    )
}

export default IngresaTusDatos