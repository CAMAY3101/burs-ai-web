import React, { useState } from 'react'
import { Input, Select, SelectItem, Checkbox, Button } from "@nextui-org/react";

import { ocupacionValues, industriaValues, subIndustriasValues, calificacionCrediticiaValues, usoPrestamoValues } from '../../Config/SolicitarPrestamo/historialValues';
import { useAuthContext } from '../../Contexts/authContext';
import axios from 'axios';
import { endpoint } from '../../Config/utils/urls';

import TextFieldWithInsideLabel from "../CustomizeComponents/TextFieldWithInsideLabel";
import SelectWithInsideLabel from '../CustomizeComponents/SelectWithInsideLabel';
import TitlePage from '../CustomizeComponents/TitlePage';
import ButtonContinue from '../CustomizeComponents/ButtomContinue';


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

  async function handleSubmit() {
    try {
      const response = await axios.post(endpoint.historial.updateDataHistorial, {
        salario_mensual: salarioMensual,
        ocupacion: ocupacion.anchorKey,
        industria: industria.anchorKey,
        subindustria: subindustria.anchorKey,
        pago_a_traves_de_banco: pagoAtravesBanco,
        salario_familiar: salarioFamiliar,
        calificacion_crediticia: calificacionCrediticia.anchorKey,
        uso_prestamo: usoPrestamo.anchorKey
      });

      if (response.data.status === 'success') {
        setTimeout(() => {
          navigateToNextStep(3);
        }, 2000);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className='sm:w-11/12 lg:w-5/12 space-y-5 '>
      <TitlePage title="Tu historial" />
      <div className='w-full flex-col space-y-7'>
        <div className='w-1/2'>
          <TextFieldWithInsideLabel
            type="number"
            label="Salario mensual"
            placeholder='Ejemplo:$15000'
            value={salarioMensual}
            onValueChange={setSalarioMensual}
          />
        </div>

        <div>
          <SelectWithInsideLabel
            label="Ocupación"
            options={ocupacionValues}
            placeholder="Selecciona una opción"
            selectedKeys={ocupacion}
            onSelectionChange={setOcupacion}
          />
        </div>

        <div>
          <SelectWithInsideLabel
            label="Industria"
            options={industriaValues}
            placeholder="Selecciona una opción"
            selectedKeys={industria}
            onSelectionChange={setIndustria}
          />
        </div>

        <div>
        <SelectWithInsideLabel
            label="Subindustria"
            options={industria.anchorKey && subIndustriasValues[industria.anchorKey] ? subIndustriasValues[industria.anchorKey] : []}
            placeholder="Selecciona una opción"
            selectedKeys={subindustria}
            onSelectionChange={setSubindustria}
          />
        </div>
        <div>
          <TextFieldWithInsideLabel
            type="number"
            label='Salario familiar total al mes'
            placeholder='Ejemplo: $15000'
            value={salarioFamiliar}
            onValueChange={setSalarioFamiliar}
          />
        </div>
        <div>
          <SelectWithInsideLabel
            label="¿Cómo consideras tu calificación crediticia?"
            options={calificacionCrediticiaValues}
            placeholder="Selecciona una opción"
            selectedKeys={calificacionCrediticia}
            onSelectionChange={setCalificacionCrediticia}
          />
        </div>

        <div>
          <SelectWithInsideLabel
            label="¿Cómo usarías el préstamo?"
            options={usoPrestamoValues}
            placeholder="Selecciona una opción"
            selectedKeys={usoPrestamo}
            onSelectionChange={setUsoPrestamo}
          />
        </div>

      </div>
      <ButtonContinue
        isDisabled={ 
          !ocupacion.size || !industria || !subindustria || !salarioMensual || !salarioFamiliar || !calificacionCrediticia.size || !usoPrestamo.size
        }
        handleSubmit={handleSubmit}
      />

    </div>
  )
}

export default TuHistorial;