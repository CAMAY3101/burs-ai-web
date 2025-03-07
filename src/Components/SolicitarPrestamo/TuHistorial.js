import React, { useState, useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ocupacionValues, industriaValues, subIndustriasValues, calificacionCrediticiaValues, usoPrestamoValues } from '../../Config/SolicitarPrestamo/historialValues';
import { useAuthContext } from '../../Contexts/authContext';
import CustomFormProvider from '../CustomizeComponents/Form/CustomFormProvider.js';
import { historial_form } from '../../Config/Schemas/yupSchemas';
import { useUpdateHistorial } from '../../hooks/useQueryHooks';
import TextField from "../CustomizeComponents/TextField";
import SelectField from '../CustomizeComponents/SelectField';
import TitlePage from '../CustomizeComponents/TitlePage';
import Button1 from '../CustomizeComponents/Button1';
import Loading from '../CustomizeComponents/Loading.jsx'


function TuHistorial() {
  const { navigateToNextStep } = useAuthContext();

  const [subindustria, setSubindustria] = useState(new Set([]));


  const defaultValues = {
    salarioMensual: '',
    ocupacion: '',
    industria: '',
    subindustria: '',
    salarioFamiliar: '',
    calificacionCrediticia: '',
    usoPrestamo: '',
    pagoAtravesBanco: '',
  };

  const methods = useForm({
    resolver: yupResolver(historial_form),
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

  const subindustriaOptions = useMemo(() => {
    return values.industria && subIndustriasValues[values.industria]
      ? subIndustriasValues[values.industria]
      : [];
  }, [values.industria]);

  const onSuccess = async () => {
    setTimeout(() => {
      navigateToNextStep(3); 
    }, 2000);
  };

  const onError = (error) => {
    console.error("Error al actualizar el historial:", error);
  };

  const updateDataHistorial = useUpdateHistorial(onSuccess, onError);

  const onSubmit = async (data) => {
    console.log('data: ', data)

    const payload = {
      salario_mensual: data.salarioMensual,
      ocupacion: data.ocupacion,
      industria: data.industria,
      subindustria: data.subindustria,
      pago_a_traves_de_banco: data.pagoAtravesBanco,
      salario_familiar: data.salarioFamiliar,
      calificacion_crediticia: data.calificacionCrediticia,
      uso_prestamo: data.usoPrestamo
    }
    updateDataHistorial.mutate(payload);
  };

  if (isSubmitting) {
    return <Loading />;
  }

  const formatCurrency = (value) => {
    if (!value) return '';
    return `$${parseFloat(value).toLocaleString('es-MX', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  const parseCurrency = (value) => {
    if (!value) return '';
    return value.replace(/[^\d.-]/g, ''); 
  };

  return (
    <div className='w-full max-w-lg flex flex-col space-y-10 mx-auto px-8'>
      <p className='font-rubik font-regular text-xs text-dark-blue-900'>Campos con asterisco <span className='font-bold'>(*) son campos obligatorios</span></p>
      <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex-col space-y-12'>
          <div className='w-2/3'>
            <TextField
              type="text"
              label="Salario mensual"
              placeholder='Ejemplo:$15000'
              name='salarioMensual'
              formatValue={formatCurrency}
              parseValue={parseCurrency}
              errorMessage={errors.salarioMensual?.message}
            />
          </div>

          <SelectField
            label="Ocupación"
            options={ocupacionValues}
            placeholder="Selecciona una opción"
            name='ocupacion'
            errorMessage={errors.ocupacion?.message}
          />

          <SelectField
            label="Industria"
            options={industriaValues}
            placeholder="Selecciona una opción"
            name='industria'
            errorMessage={errors.industria?.message}
          />

          <SelectField
            label="Subindustria"
            options={values.industria && subIndustriasValues[values.industria] ? subIndustriasValues[values.industria] : []}
            placeholder="Selecciona una opción"
            name='subindustria'selectedKeys={Array.from(subindustria)}
            onSelectionChange={(selected) => setSubindustria(new Set(selected))}
            errorMessage={errors.subindustria?.message}
          />

          <SelectField
            label="¿Te pagan a través de un banco?"
            options={[{ label: "Sí", value: "Si" }, { label: "No", value: "No" },]}
            placeholder="Selecciona una opción"
            name='pagoAtravesBanco'
            errorMessage={errors.pagoAtravesBanco?.message}
          />

          <TextField
            type="text"
            label='Salario familiar total al mes'
            placeholder='Ejemplo: $15000'
            name='salarioFamiliar'
            formatValue={formatCurrency}
            parseValue={parseCurrency}
            errorMessage={errors.salarioFamiliar?.message}
          />

          <div id='calificacion_crediticia' className='flex md:flex lg:block' >
            <SelectField
              label="¿Cómo consideras tu calificación crediticia?"
              options={calificacionCrediticiaValues}
              placeholder="Selecciona una opción"
              name='calificacionCrediticia'
              errorMessage={errors.calificacionCrediticia?.message}
            />
          </div>
          <SelectField
            label="¿Cómo usarías el préstamo?"
            options={usoPrestamoValues}
            placeholder="Selecciona una opción"
            name='usoPrestamo'
            errorMessage={errors.usoPrestamo?.message}
          />
        </div>
      </CustomFormProvider >
      <Button1
        handleSubmit={handleSubmit(onSubmit)}
      />

    </div >
  )
}

export default TuHistorial;