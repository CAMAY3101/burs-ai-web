import React, { useState } from 'react'
import { ocupacionValues, industriaValues, subIndustriasValues, calificacionCrediticiaValues, usoPrestamoValues } from '../../Config/SolicitarPrestamo/historialValues';
import { useAuthContext } from '../../Contexts/authContext';
import axios from 'axios';
import { endpoint } from '../../Config/utils/urls';
import { historial_form } from '../../Config/Schemas/yupSchemas';
import { useUpdateHistorial } from '../../hooks/useQueryHooks';
import TextField from "../CustomizeComponents/TextField";
import SelectField from '../CustomizeComponents/SelectField';
import TitlePage from '../CustomizeComponents/TitlePage';
import Button1 from '../CustomizeComponents/Button1';


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

  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState({});

  const { mutate: updateHistorial, isLoading: isUpdating } = useUpdateHistorial(
    () => {
      setTimeout(() => {
        navigateToNextStep(3); // Navegar al siguiente paso si es exitoso
      }, 2000);
    },
    (error) => {
      console.error("Error al actualizar el historial:", error);
    }
  );

  const handleCheckboxSiChange = () => {
    setIsCheckedSi(!isCheckedSi);
    setPagoAtravesBanco(true);
    // Si marcamos "Sí", desmarcamos "No"
    if (isCheckedNo) {
      setIsCheckedNo(false);
    }
  };

  const handleCheckboxNoChange = () => {
    setIsCheckedNo(!isCheckedNo);
    setPagoAtravesBanco(false);
    // Si marcamos "No", desmarcamos "Sí"
    if (isCheckedSi) {
      setIsCheckedSi(false);
    }
  };

  const handleSubmit = async () => {
    const valuesToValidate = {
      salarioMensual,
      ocupacion: Array.from(ocupacion),
      industria: Array.from(industria),
      subindustria: Array.from(subindustria),
      salarioFamiliar,
      calificacionCrediticia: Array.from(calificacionCrediticia),
      usoPrestamo: Array.from(usoPrestamo),
      pagoAtravesBanco,
    };

    try {
      await historial_form.validate(valuesToValidate, { abortEarly: false });

      // Llamar al hook para actualizar el historial
      updateHistorial({
        salario_mensual: salarioMensual,
        ocupacion: Array.from(ocupacion).map((key) => key.anchorKey),
        industria: Array.from(industria).map((key) => key.anchorKey),
        subindustria: Array.from(subindustria).map((key) => key.anchorKey),
        salario_familiar: salarioFamiliar,
        calificacion_crediticia: Array.from(calificacionCrediticia).map((key) => key.anchorKey),
        uso_prestamo: Array.from(usoPrestamo).map((key) => key.anchorKey),
        pago_a_traves_de_banco: pagoAtravesBanco,
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Error al validar los datos:", error);
      }
    }
  };

  return (
    <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
      <TitlePage title="Tu historial" />
      <div className='flex-col space-y-12'>
        <div className='w-1/2'>
          <TextField
            type="number"
            label="Salario mensual"
            placeholder='Ejemplo:$15000'
            value={salarioMensual}
            onValueChange={setSalarioMensual}
            errorMessage={errors.salarioMensual}
          />
        </div>

        <div>
          <SelectField
            label="Ocupación"
            options={ocupacionValues}
            placeholder="Selecciona una opción"
            selectedKeys={ocupacion}
            onSelectionChange={setOcupacion}
            errorMessage={errors.ocupacion}
          />
        </div>

        <div>
          <SelectField
            label="Industria"
            options={industriaValues}
            placeholder="Selecciona una opción"
            selectedKeys={industria}
            onSelectionChange={setIndustria}
            errorMessage={errors.industria}
          />
        </div>

        <div>
          <SelectField
            label="Subindustria"
            options={industria.anchorKey && subIndustriasValues[industria.anchorKey] ? subIndustriasValues[industria.anchorKey] : []}
            placeholder="Selecciona una opción"
            selectedKeys={subindustria}
            onSelectionChange={setSubindustria}
            errorMessage={errors.subindustria}
          />
        </div>

        <div className='w-2/3 mt-5'>
          <TextField
            type="number"
            label='Salario familiar total al mes'
            placeholder='Ejemplo: $15000'
            value={salarioFamiliar}
            onValueChange={setSalarioFamiliar}
            className="mt-5"
            errorMessage={errors.salarioFamiliar}
          />
        </div>

        <div>
          <SelectField
            label="¿Cómo consideras tu calificación crediticia?"
            options={calificacionCrediticiaValues}
            placeholder="Selecciona una opción"
            selectedKeys={calificacionCrediticia}
            onSelectionChange={setCalificacionCrediticia}
            errorMessage={errors.calificacionCrediticia}
          />
        </div>

        <div>
          <SelectField
            label="¿Cómo usarías el préstamo?"
            options={usoPrestamoValues}
            placeholder="Selecciona una opción"
            selectedKeys={usoPrestamo}
            onSelectionChange={setUsoPrestamo}
            errorMessage={errors.usoPrestamo}
          />
        </div>

      </div>
      <Button1
        isDisabled={
          !ocupacion.size || !industria || !subindustria || !salarioMensual || !salarioFamiliar || !calificacionCrediticia.size || !usoPrestamo.size
        }
        handleSubmit={handleSubmit}
      />

    </div>
  )
}

export default TuHistorial;