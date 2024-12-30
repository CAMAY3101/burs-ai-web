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
import Loading from '../CustomizeComponents/Loading.jsx'


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
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onError = (error) => {
    console.error("Error al actualizar el historial:", error);
  };

  const { mutate: createAddress, isLoading: isCreatingAddress } = useCreateAddress(
    () => { 
      sendOTP();
    },
    onError
  );

  const { mutate: sendOTP, isLoading: isSendingOTP } = useSendOTPCode(
    () => {
      console.log("Código OTP enviado con éxito");
      navigateToNextStep(4);
    },
    onError
  );

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

   // Muestra el componente Loading si hay alguna operación en progreso
   if (isCreatingAddress || isSendingOTP) {
    return <Loading />;
  }

  return (
    <>
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
            />

            <div id='num ext e int' className='flex space-x-5' >
              <TextField
                type='text'
                name='numExt'
                label='Número Exterior'
                placeholder='Ejemplo: 25'
                errorMessage={errors.numExt?.message}
              />

              <TextField
                type='text'
                name='numInt'
                isRequired={false}
                label='Número Interior'
                placeholder='Ejemplo: 25'
                errorMessage={errors.numInt?.message}
              />
            </div>
            <div className='flex space-x-5' >
              <TextField
                type='text'
                name='colonia'
                label='Colonia'
                placeholder='Ejemplo: Del Valle'
                errorMessage={errors.colonia?.message}
              />
              <TextField
                isRequired
                type='text'
                name='cp'
                label='C.P.'
                placeholder='Ejemplo: 12345'
                errorMessage={errors.cp?.message}
              />
            </div>

            <TextField
                          type='text'
                          name='municipio'
                          label='Municipio'
                          placeholder='Ejemplo: Nezahualcóyotl'
                          errorMessage={errors.municipio?.message}
            />
            <TextField
                          type='text'
                          name='estado'
                          label='Estado'
                          placeholder='Ejemplo: Estado de México'
                          errorMessage={errors.estado?.message}
            />

            <SelectField
              label="Tipo de vivienda"
              name="tipoVivienda"
              options={[
                { value: 'propia', label: 'Propia' },
                { value: 'pagando', label: 'Pagando' },
                { value: 'alquilada con contrato formal', label: 'Alquilada con contrato formal' },
                { value: 'alquilada sin contrato formal', label: 'Alquilada sin contrato formal' },
                { value: 'vivienda familiar', label: 'Vivienda familiar' },
                { value: 'huesped', label: 'Huésped' },
              ]}
              placeholder="Selecciona una opción"
              errorMessage={errors.tipoVivienda?.message}
            />
          </div>

          <Button1
            isDisabled={isSubmitting || isCreatingAddress || isSendingOTP}
            handleSubmit={handleSubmit(onSubmit)}
          />
          </CustomFormProvider>
      </div>
    </>
  )
}

export default IngresaTuDomicilio