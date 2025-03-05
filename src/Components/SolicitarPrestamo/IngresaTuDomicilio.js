import React, { useState } from 'react';
import { useAuthContext } from '../../Contexts/authContext';
import { address_form } from '../../Config/Schemas/yupSchemas.js';
import { useCreateAddress, useSendOtpPhone } from '../../hooks/useQueryHooks.js';
import TextField from '../CustomizeComponents/TextField.jsx';
import SelectField from '../CustomizeComponents/SelectField.jsx'
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';
import Loading from '../CustomizeComponents/Loading.jsx'
import codigosPostales from '../../../src/data/codigos_postales.json'


function IngresaTuDomicilio() {
  const { navigateToNextStep } = useAuthContext();
  const [colonias, setColonias] = useState([])

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
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = methods;

  const cpValue = watch('cp');

  const onError = (error) => {
    console.error("Error al actualizar el historial:", error);
  };

  const { mutate: createAddress, isLoading: isCreatingAddress } = useCreateAddress(
    () => {
      sendOtpPhone();
    },
    onError
  );

  const { mutate: sendOtpPhone } = useSendOtpPhone(
      () => {
        console.log("Código OTPPhone enviado con éxito");
        navigateToNextStep(4);
      },
      onError);

  // Buscar información del CP
  const fetchCPData = (cp) => {
    if (!cp || cp.length !== 5) return;

    const data = codigosPostales.find(item => item.codigo_postal === cp);

    if (data) {
      const { municipio, estado, colonias } = data;
      setValue('municipio', municipio || '');
      setValue('estado', estado || '');
      setColonias(colonias || []);
    } else {
      console.error('Código postal no encontrado');
      setColonias([]);
      setValue('municipio', '');
      setValue('estado', '');
    }
  };

  // Ejecutar búsqueda de CP al cambiar el valor
  React.useEffect(() => {
    fetchCPData(cpValue);
  }, [cpValue]);

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
  if (isCreatingAddress || isSubmitting) {
    return <Loading />;
  }

  return (
    <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8'>
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

          <div id='num_int' className="flex" style={{ marginTop: window.innerWidth < 768 ? '3rem' : '1.5rem' }}>

            <div style={{ display: 'inline-block', width: '48%', marginRight: '4%' }}>
              <TextField
                type='text'
                name='numExt'
                label='Número Exterior'
                placeholder='Ejemplo: 25'
                errorMessage={errors.numExt?.message}
              />
            </div>

            <div style={{ display: 'inline-block', width: '48%' }}>
              <TextField
                type='text'
                name='numInt'
                isRequired={false}
                label='Número Interior'
                placeholder='Ejemplo: 25'
                errorMessage={errors.numInt?.message}
              />
            </div>
          </div>
          <div id='cp' style={{ marginTop: '15px', lineHeight: '1' }} >
            <div style={{ display: 'inline-block', width: '43%', marginRight: '4%', marginTop: '-6px' }}>
              <TextField
                isRequired
                type='text'
                name='cp'
                label='C.P.'
                placeholder='Ejemplo: 12345'
                errorMessage={errors.cp?.message}
              />
            </div>
            <div style={{ display: 'inline-block', width: '53%' }}>
              <SelectField
                type='text'
                name='colonia'
                label='Colonia'
                options={colonias.map((col) => ({ value: col, label: col }))}
                placeholder='Selecciona tu Colonia'
                errorMessage={errors.colonia?.message}
              />
            </div>
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

      </CustomFormProvider>
      <Button1
        isDisabled={isSubmitting || isCreatingAddress}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </div>
  )
}

export default IngresaTuDomicilio