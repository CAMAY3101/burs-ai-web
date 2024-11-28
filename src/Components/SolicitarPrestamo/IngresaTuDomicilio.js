import React, { useState } from 'react';
import { Input, Button, Select, SelectItem } from "@nextui-org/react"
import axios from 'axios';
import { useAuthContext } from '../../Contexts/authContext';
import { endpoint } from '../../Config/utils/urls';
import TextField from '../CustomizeComponents/TextField.jsx';
import SelectField from '../CustomizeComponents/SelectField.jsx'
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import ButtonContinue from '../CustomizeComponents/ButtomContinue.jsx';


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
            const response = await axios.post(endpoint.direccion.createDireccion, {
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
                        const responseOTP = await axios.post(endpoint.verificacion.sendOTPCodeEmail);
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
            <TitlePage title="Ingresa tu domicilio" />
            <div className='flex-col space-y-12'>

                <TextField
                    type='text'
                    label='Calle'
                    placeholder='Ejemplo: Av. Insurgentes Sur'
                    value={calle}
                    onValueChange={setCalle}
                />

                <div id='num ext e int' className='flex space-x-5' >
                    <TextField
                        type='text'
                        label='Numero Exterior'
                        placeholder='Ejemplo: 25'
                        value={numExt}
                        onValueChange={setNumExt}
                    />
                    <TextField
                        type='text'
                        label='Numero Interior'
                        placeholder='Ej: 25'
                        value={numInt}
                        onValueChange={setNumInt}
                    />
                </div>

                <div className='flex space-x-5'>
                    <TextField
                        type='text'
                        label='Colonia'
                        placeholder='Ejemplo: Del Valle'
                        value={colonia}
                        onValueChange={setColonia}
                    />
                    <TextField
                        isRequired
                        type='text'
                        label='C.P.'
                        placeholder='Ejemplo: 12345'
                        value={cp}
                        onValueChange={setCp}
                    />
                </div>

                <TextField
                    isRequired
                    type='text'
                    label='Municipio'
                    placeholder='Ejemplo: Nezahualcóyotl'
                    value={municipio}
                    onValueChange={setMunicipio}
                />
                <TextField
                    isRequired
                    type='text'
                    label='Estado'
                    placeholder='Ejemplo: Estado de México'
                    value={estado}
                    onValueChange={setEstado}
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
                    selectedKeys={tipoVivienda}
                    onSelectionChange={setTipoVivienda}
                />
            </div>

            <ButtonContinue
                isDisabled={!calle || !numExt || !numInt || !colonia || !cp || !municipio || !estado || !tipoVivienda}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default IngresaTuDomicilio