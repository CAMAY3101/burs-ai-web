import React, { useState} from 'react';
import { Input, Button, Select, SelectItem } from "@nextui-org/react" 
import axios from 'axios';
import { useAuthContext } from '../../Contexts/authContext';

const styles_input = {
    label: [
        "text-dark-blue-950",
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
    label: [
        "group-data-[filled-within=true]:text-dark-blue-950",
        "font-rubik",
        "font-medium",
        "text-base",
    ],
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

function IngresaTuDomicilio() {
    const { navigateToNextStep } = useAuthContext();
    const [calle, setCalle] = useState('');
    const [numExt, setNumExt] = useState('');
    const [numInt, setNumInt] = useState('');
    const [colonia, setColonia] = useState('');
    const [cp, setCp] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');
    const [tipoVivienda, setTipoVivienda] = useState('');

    async function handleSubmit() {
        try {
            const response = await axios.post('https://api.burs.com.mx/direccion/createDireccion', {
                calle: calle,
                numero_exterior: numExt,
                numero_interior: numInt,
                colonia: colonia,
                cp: cp,
                municipio: municipio,
                estado: estado,
                tipo_vivienda: tipoVivienda.anchorKey
            });

            if (response.data.status === 'success') {
                setTimeout(async () => { 
                    try {
                        const responseOTP = await axios.post('https://api.burs.com.mx/verificacion/sendOTPCodeEmail');
                        if (responseOTP.data.status === 'success') {
                            navigateToNextStep(4);
                        }
                    } catch (error) {
                        console.error('Error enviando OTP:', error);
                    }
                }, 2000);
            }
        } catch (error) {
            console.error(error);
        }
    }

  return (
      <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
          <h1 className='font-rubik font-bold text-xl text-purple-heart-950'> Ingresa tu domicilio</h1>
          <div className='flex-col space-y-12'>
              <Input
                  isRequired
                  type='text'
                  label='Calle'
                  placeholder='Ejemplo: Av. Insurgentes Sur'
                  size='md'
                  variant='bordered'
                  classNames={styles_input}
                  labelPlacement='outside'
                  value={calle}
                  onValueChange={setCalle}
              />

              <div id='num ext e int' className='flex space-x-5' >
                  <Input
                      isRequired
                      type='text'
                      label='Numero Exterior'
                      placeholder='Ejemplo: 25'
                      size='md'
                      variant='bordered'
                      classNames={styles_input}
                      labelPlacement='outside'
                        value={numExt}
                        onValueChange={setNumExt}
                  />
                  <Input
                      type='text'
                      label='Numero Interior'
                      placeholder='Ej: 25'
                      size='md'
                      variant='bordered'
                      classNames={styles_input}
                      labelPlacement='outside'
                        value={numInt}
                        onValueChange={setNumInt}

                  />
              </div>

              <div className='flex space-x-5'>
                  <Input
                      isRequired
                      type='text'
                      label='Colonia'
                      placeholder='Ejemplo: Del Valle'
                      size='md'
                      variant='bordered'
                      classNames={styles_input}
                      labelPlacement='outside'
                      className='w-7/12'
                      value={colonia}
                        onValueChange={setColonia}
                  />

                  <Input
                      isRequired
                      type='text'
                      label='C.P.'
                      placeholder='Ejemplo: 12345'
                      size='md'
                      variant='bordered'
                      classNames={styles_input}
                      labelPlacement='outside'
                      className='w-5/12'
                      value={cp}
                      onValueChange={setCp}
                  />
              </div>

              <Input
                  isRequired
                  type='text'
                  label='Municipio'
                  placeholder='Ejemplo: PERJ950425HDFLPS09'
                  size='md'
                  variant='bordered'
                  classNames={styles_input}
                  labelPlacement='outside'
                    value={municipio}
                    onValueChange={setMunicipio}
              />

              <Input
                  isRequired
                  type='text'
                  label='Estado'
                  placeholder='Ejemplo: PERJ950425HDFLPS09'
                  size='md'
                  variant='bordered'
                  classNames={styles_input}
                  labelPlacement='outside'
                    value={estado}
                    onValueChange={setEstado}
              />

              <Select
                  label='Tipo de vivienda'
                  className="max-w"
                  placeholder='Selecciona una opcion'
                  variant='bordered'
                  classNames={styles_select}
                  labelPlacement='outside'
                    selectedKeys={tipoVivienda}
                    onSelectionChange={setTipoVivienda}
              >

                <SelectItem value='propia' key='propia'>Propia</SelectItem>
                <SelectItem value='pagando' key='pagando'>Pagando</SelectItem>
                <SelectItem value='alquilada con contrato formal' key='alquilada con contrato formal'>Alquilada con contrato formal</SelectItem>
                <SelectItem value='alquilada sin contrato formal' key='alquilada sin contrato formal'>Alquilada sin contrato formal</SelectItem>
                <SelectItem value='vivienda familiar' key='vivienda familiar'>Vivienda familiar</SelectItem>
                <SelectItem value='huesped' key='huesped'>Huesped</SelectItem>

              </Select>
          </div>

          <Button
              size='large'
              color='secondary' 
                onClick={handleSubmit} 
          >
              Continuar
          </Button>
      </div>
  )
}

export default IngresaTuDomicilio