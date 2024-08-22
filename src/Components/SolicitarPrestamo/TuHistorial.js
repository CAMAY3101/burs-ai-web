import React, { useState } from 'react'
import { Input, Select, SelectItem, Checkbox, Button} from "@nextui-org/react";

import { ocupacionValues, industriaValues, subIndustriasValues, calificacionCrediticiaValues, usoPrestamoValues } from '../../Config/SolicitarPrestamo/historialValues';
import { useAuthContext } from '../../Contexts/authContext';
import axios from 'axios';

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

const styles_select = {
  trigger: [
    "rounded-xl",
    "border-dark-blue-400",
    "data-[hover=true]:border-dark-blue-700",
    "data-[open=true]:border-dark-blue-900",
    "data-[focus=true]:border-dark-blue-900",
    "!cursor-text",
    "space-y-2",
  ],
  value: [
    "rubik-Regular-16",
    "text-dark-blue-800",
  ]
};

const style_label = 'rubik-Medium-15 text-dark-blue-950'

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
      const response = await axios.post('https://api.burs.com.mx/historial/updateDataHistorial', {
        salario_mensual: salarioMensual,
        ocupacion: ocupacion.anchorKey,
        industria: industria.anchorKey,
        subindustria: subindustria.anchorKey,
        pago_a_traves_de_banco: pagoAtravesBanco,
        salario_familiar: salarioFamiliar,
        calificacion_crediticia: calificacionCrediticia.anchorKey,
        uso_prestamo: usoPrestamo.anchorKey
      });

      if (response.data.status === 'success' ) {
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
      <h3 className='rubik-Bold-23 text-purple-heart-900'>Tu historial</h3>
      <div className='w-full flex-col space-y-7'>
        <div className='w-1/2'>
          <Input
            type="number"
            label="Salario mensual"
            placeholder='Ejemplo: $15000'
            variant='bordered'
            labelPlacement='inside'
            size='md'
            classNames={styles_input}
            value={salarioMensual}
            onValueChange={setSalarioMensual}
          />
        </div>
        <div>
          <Select
            label='Ocupación'
            className="max-w"
            placeholder="Selecciona una opcion"
            variant='bordered'
            size='md'
            classNames={styles_select}
            selectedKeys={value}
            onSelectionChange={setOcupacion}

          >
            {ocupacionValues.map((ocupacion) => (
              <SelectItem value={ocupacion.value} key={ocupacion.value}>
                {ocupacion.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='space-y-2'>
          <Select
            label={<div className={style_label}>Industria</div>}
            className="max-w"
            placeholder='Selecciona una opcion'
            variant='bordered'
            classNames={styles_select}
            selectedKeys={industria}
            onSelectionChange={setIndustria}
          >
            {industriaValues.map((industria) => (
              <SelectItem value={industria.value} key={industria.value}>
                {industria.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label={<div className={style_label}>Subindustria</div>}
            className="max-w"
            placeholder='Selecciona una opcion'
            variant='bordered'
            classNames={styles_select}
            selectedKeys={subindustria}
            onSelectionChange={setSubindustria}
          >
            {industria.anchorKey && subIndustriasValues[industria.anchorKey] && subIndustriasValues[industria.anchorKey].map((subindustria) => (
              <SelectItem value={subindustria.value} key={subindustria.value}>
                {subindustria.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='space-y-2'>
          <p className={style_label}>¿Te pagan a través de un banco?</p>
          <div className='flex flex-col space-y-1'>
            <Checkbox isSelected={isCheckedSi} onChange={handleCheckboxSiChange} color='secondary'>Si</Checkbox>
            <Checkbox isSelected={isCheckedNo} onChange={handleCheckboxNoChange} color='secondary'>No</Checkbox>
          </div>
        </div>
        <div className='w-fit'>
          <Input
            type="number"
            label={<div className={style_label}>Salario familiar total al mes</div>}
            placeholder='Ejemplo: $15000'
            variant='bordered'
            labelPlacement='inside'
            size='md'
            classNames={styles_input}
            value={salarioFamiliar}
            onValueChange={setSalarioFamiliar}
          />
        </div>
        <div>
          <Select
            label={<div className={style_label}>¿Como consideras tu calificación crediticia?</div>}
            className="max-w"
            placeholder='Selecciona una opcion'
            variant='bordered'
            classNames={styles_select}
            selectedKeys={calificacionCrediticia}
            onSelectionChange={setCalificacionCrediticia}
          >
            {calificacionCrediticiaValues.map((calificacion) => (
              <SelectItem value={calificacion.value} key={calificacion.value}>
                {calificacion.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Select
            label={<div className={style_label}>"¿Como usarias el prestamo?"</div>}
            className="max-w"
            placeholder='Selecciona una opcion'
            variant='bordered'
            classNames={styles_select}
            selectedKeys={usoPrestamo}
            onSelectionChange={setUsoPrestamo}
          >
            {usoPrestamoValues.map((uso) => (
              <SelectItem value={uso.value} key={uso.value}>
                {uso.label}
              </SelectItem>
            ))
            }
          </Select>
        </div>
      </div>
      <Button
        color='primary'
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </div>
  )
}

export default TuHistorial;