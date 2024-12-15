import React, { useState } from 'react';
import { useAuthContext } from '../../Contexts/authContext';
import { address_form } from '../../Config/Schemas/yupSchemas.js';
import { useCreateAddress, useSendOTPCode } from '../../hooks/useQueryHooks.js';
import TextField from '../CustomizeComponents/TextField.jsx';
import SelectField from '../CustomizeComponents/SelectField.jsx'
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';


function IngresaTuDomicilio() {
  const { navigateToNextStep } = useAuthContext();
  const defaultValues = {
    calle: '',
    numExt: '',
    numInt: '',
    colonia: '',
    cp: '',
    municipio: '',
    estado: '',
    tipoVivienda: '',
  };
  const methods = useForm({
    resolver: yupResolver(address_form),
    mode: 'onChange',
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = methods;

  const { mutate: createAddress, isLoading: isCreatingAddress } = useCreateAddress(
    async () => {
      await sendOTP(); // Llama al siguiente paso después de guardar el domicilio
    },
    (error) => {
      console.error("Error al guardar el domicilio:", error);
    }
  );

  const { mutate: sendOTP, isLoading: isSendingOTP } = useSendOTPCode(
    () => {
      navigateToNextStep(4); // Avanza al siguiente paso
    },
    (error) => {
      console.error("Error al enviar el código OTP:", error);
    }
  );

  // Envío del formulario
  const onSubmit = async (data) => {
    createAddress({
      calle: data.calle,
      numero_exterior: data.numExt,
      numero_interior: data.numInt,
      colonia: data.colonia,
      cp: data.cp,
      municipio: data.municipio,
      estado: data.estado,
      tipo_vivienda: data.tipoVivienda,
    });
  };

  return (
    <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
      <TitlePage title="Ingresa tu domicilio" />
      <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex-col space-y-12'>

          <TextField
            type='text'
            name='calle'
            label='Calle'
            placeholder='Ejemplo: Av. Insurgentes Sur'
            errorMessage={errors.calle?.message}
            value={watch('calle')}
            onValueChange={(value) => setValue('calle', value, { shouldValidate: true })}
          />

          <div id='num ext e int' className='flex space-x-5' >
            <TextField
              type='text'
              name='numExt'
              label='Número Exterior'
              placeholder='Ejemplo: 25'
              errorMessage={errors.numExt?.message}
              value={watch('numExt')}
              onValueChange={(value) => setValue('numExt', value, { shouldValidate: true })}
            />

            <TextField
              type='text'
              name='numInt'
              label='Número Interior'
              placeholder='Ejemplo: 25'
              errorMessage={errors.numInt?.message}
              value={watch('numInt')}
              onValueChange={(value) => setValue('numInt', value, { shouldValidate: true })}
            />
          </div>
          <div className='flex space-x-5' >
            <TextField
              type='text'
              name='colonia'
              label='Colonia'
              placeholder='Ejemplo: Del Valle'
              errorMessage={errors.colonia?.message}
              value={watch('colonia')}
              onValueChange={(value) => setValue('colonia', value, { shouldValidate: true })}
            />
            <TextField
              isRequired
              type='text'
              name='cp'
              label='C.P.'
              placeholder='Ejemplo: 12345'
              errorMessage={errors.cp?.message}
              value={watch('cp')}
              onValueChange={(value) => setValue('cp', value, { shouldValidate: true })}
            />
          </div>

          <TextField
                        type='text'
                        name='municipio'
                        label='Municipio'
                        placeholder='Ejemplo: Nezahualcóyotl'
                        errorMessage={errors.municipio?.message}
                        value={watch('municipio')}
                        onValueChange={(value) => setValue('municipio', value, { shouldValidate: true })}
          />
          <TextField
                        type='text'
                        name='estado'
                        label='Estado'
                        placeholder='Ejemplo: Estado de México'
                        errorMessage={errors.estado?.message}
                        value={watch('estado')}
                        onValueChange={(value) => setValue('estado', value, { shouldValidate: true })}
          />

          <SelectField
            label="Tipo de vivienda"
            options={[
              { value: 'propia', label: 'Propia' },
              { value: 'pagando', label: 'Pagando' },
              { value: 'alquilada con contrato formal', label: 'Alquilada con contrato formal' },
              { value: 'alquilada sin contrato formal', label: 'Alquilada sin contrato formal' },
              { value: 'vivienda familiar', label: 'Vivienda familiar' },
              { value: 'huesped', label: 'Huésped' },
            ]}
            placeholder="Selecciona una opción"
            selectedKeys={watch('tipoVivienda')}
            onSelectionChange={(value) => setValue('tipoVivienda', value, { shouldValidate: true })}
            errorMessage={errors.tipoVivienda?.message}
          />
        </div>

        <Button1
                    isDisabled={isSubmitting || isCreatingAddress || isSendingOTP}
                    handleSubmit={handleSubmit(onSubmit)}
        />
        </CustomFormProvider>
    </div>
  )
}

export default IngresaTuDomicilio