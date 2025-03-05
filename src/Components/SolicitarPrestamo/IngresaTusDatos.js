import React from 'react';
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
        telefono: '',
        fecha_nacimiento: '',
        curp: '',
        op_telefono: ''
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
    console.log("Errores del formulario:", errors)

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
            telefono: data.telefono,
            fecha_nacimiento: data.fecha_nacimiento,
            curp: data.curp,
            op_telefono: data.op_telefono
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        updateDataUserQuery.mutate(payload);
    };

    if (isSubmitting) {
        return <Loading />;
    }

    return (
        <>
            <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8'>
                <p className='font-rubik font-regular text-xs text-dark-blue-900'>Campos con asterisco <span className='font-bold'>(*) son campos obligatorios</span></p>
                <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex-col space-y-12'>
                        <TextField
                            type='text'
                            name='nombre'
                            label='Nombre(s)'
                            placeholder='Ejemplo: Juan'
                            errorMessage={errors.nombre?.message || ' '}
                        />
                        <TextField
                            type='text'
                            name='apellidos'
                            label='Apellido(s)'
                            placeholder='Ejemplo: Perez Lopez'
                            errorMessage={errors.apellidos?.message}
                        />
                        <div id='edad' className='w-3/4'>
                            <TextField
                                type='date'
                                name='fecha_nacimiento'
                                label='Fecha de nacimiento'
                                placeholder='Ej: 25'
                                errorMessage={errors.fecha_nacimiento?.message}
                            />
                        </div>
                        <TextField
                            type='text'
                            name='curp'
                            label='CURP'
                            placeholder='Ej: BAGG004509JHSWUDE8'
                            errorMessage={errors.curp?.message}
                        />
                        <div id='edad' className='w-3/4'>
                        <TextField
                            type='text'
                            name='telefono'
                            label='Teléfono'
                            placeholder='Ej: 5560607070'
                            errorMessage={errors.telefono?.message}
                        />
                        </div>
                        <div id='edad' className='w-3/4'>
                        <TextField
                            type='text'
                            name='op_telefono'
                            label='Teléfono Secundario'
                            placeholder='Ej: 5560607070'
                            errorMessage={errors.op_telefono?.message}
                        />
                        </div>
                    </div >
                </CustomFormProvider >
                <Button1
                    isDisabled={isSubmitting}
                    handleSubmit={handleSubmit(onSubmit)}
                />
            </div>
        </>
    )
}

export default IngresaTusDatos