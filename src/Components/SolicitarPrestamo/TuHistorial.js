import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

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
  // ------ CHECKBOX ------
  const [value, setValue] = useState("");
  const [isCheckedSi, setIsCheckedSi] = useState(false);
  const [isCheckedNo, setIsCheckedNo] = useState(false);

  // -------- ALMACENAR VALORES DE INPUTS --------
  const [salarioMensual, setSalarioMensual] = useState('');
  const [ocupacion, setOcupacion] = useState(new Set([]));
  const [industria, setIndustria] = useState(new Set([]));
  const [subindustria, setSubindustria] = useState(new Set([]));
  const [pagoAtravesBanco, setPagoAtravesBanco] = useState(false);
  const [salarioFamiliar, setSalarioFamiliar] = useState('');
  const [calificacionCrediticia, setCalificacionCrediticia] = useState(new Set([]));
  const [usoPrestamo, setUsoPrestamo] = useState(new Set([]));


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


  const onSuccess = async () => {
    setTimeout(() => {
      navigateToNextStep(3); // Navegar al siguiente paso si es exitoso
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
    return value.replace(/[^\d.-]/g, ''); // Elimina caracteres no numéricos
  };

  return (
    <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
      <TitlePage title="Tu historial" />
      <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex-col space-y-12'>
          <div className='w-1/2'>
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

          <div>
            <SelectField
              label="Ocupación"
              options={ocupacionValues}
              placeholder="Selecciona una opción"
              name='ocupacion'
              errorMessage={errors.ocupacion?.message}
            />
          </div>

          <div>
            <SelectField
              label="Industria"
              options={industriaValues}
              placeholder="Selecciona una opción"
              name='industria'
              errorMessage={errors.industria?.message}
            />
          </div>

          <div>
            <SelectField
              label="Subindustria"
              options={values.industria && subIndustriasValues[values.industria] ? subIndustriasValues[values.industria] : []}
              placeholder="Selecciona una opción"
              name='subindustria'
              selectedKeys={subindustria}
              onSelectionChange={setSubindustria}
              errorMessage={errors.subindustria?.message}
            />
          </div>

          <div>
            <SelectField
              label="¿Te pagan a través de un banco?"
              options={[{ label: "Sí", value: "Si" }, { label: "No", value: "No" },]}
              placeholder="Selecciona una opción"
              name='pagoAtravesBanco'
              errorMessage={errors.pagoAtravesBanco?.message}
            />
          </div>

          <div className='w-2/3 mt-5'>
            <TextField
              type="text"
              label='Salario familiar total al mes'
              placeholder='Ejemplo: $15000'
              name='salarioFamiliar'
              className="mt-5"
              formatValue={formatCurrency} 
              parseValue={parseCurrency}
              errorMessage={errors.salarioFamiliar?.message}
            />
          </div>

          <div>
            <SelectField
              label="¿Cómo consideras tu calificación crediticia?"
              options={calificacionCrediticiaValues}
              placeholder="Selecciona una opción"
              name='calificacionCrediticia'
              errorMessage={errors.calificacionCrediticia?.message}
            />
          </div>

          <div>
            <SelectField
              label="¿Cómo usarías el préstamo?"
              options={usoPrestamoValues}
              placeholder="Selecciona una opción"
              name='usoPrestamo'
              errorMessage={errors.usoPrestamo?.message}
            />
          </div>

        </div>
      </CustomFormProvider>
      <Button1
        handleSubmit={handleSubmit(onSubmit)}
      />

    </div>
  )
}

export default TuHistorial;