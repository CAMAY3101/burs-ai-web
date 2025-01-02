import React, { useState, useEffect } from 'react';
import 'react-international-phone/style.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';
import toast from 'react-hot-toast';
import { datos_form } from '../../Config/Schemas/yupSchemas.js';

import { useAuthContext } from '../../Contexts/authContext';
import { useUpdateUserQuery } from '../../hooks/useQueryHooks.js';
import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';
import Loading from '../CustomizeComponents/Loading.jsx';



function IngresaTusDatos() {
    const { navigateToNextStep } = useAuthContext();

    const defaultValues = {
        nombre: '',
        apellidos: '',
        edad: '',
        telefono: ''
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
    console.log('isSubmitting:', isSubmitting);


    //----------------------coneccion API----------------------

    const onSuccess = async () => {
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

    const onSubmit = async (data) => {
        const payload = {
            nombre: data.nombre,
            apellidos: data.apellidos,
            edad: data.edad,
            telefono: data.telefono
        }
        updateDataUserQuery.mutate(payload);
    };

    if (isSubmitting) {
        return <Loading />;
    }

    return (
        <>
            <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
                <TitlePage title="Ingresa tus datos" />
                <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex-col space-y-12'>
                        <div>
                            <TextField
                                type='text'
                                name='nombre'
                                label='Nombre(s)'
                                placeholder='Ejemplo: Juan'
                                errorMessage={errors.nombre?.message}
                            />
                        </div>
                        <div>
                            <TextField
                                type='text'
                                name='apellidos'
                                label='Apellido(s)'
                                placeholder='Ejemplo: Perez Lopez'
                                errorMessage={errors.apellidos?.message}
                            />
                        </div>
                        <div className='w-1/2'>
                            <TextField
                                type='number'
                                name='edad'
                                label='Edad'
                                placeholder='Ej: 25'
                                className='w-1/2'
                                min={18}
                                max={100}
                                errorMessage={errors.edad?.message}
                            />
                        </div>
                        <div>
                            <TextField
                                type='text'
                                name='telefono'
                                label='Teléfono'
                                placeholder='Ej: 5560607070'
                                errorMessage={errors.telefono?.message}
                            />
                        </div>
                        <Button1
                            isDisabled={isSubmitting}
                            handleSubmit={handleSubmit(onSubmit)}
                        />
                    </div>
                </CustomFormProvider >
            </div >
        </>
    )
}

export default IngresaTusDatos