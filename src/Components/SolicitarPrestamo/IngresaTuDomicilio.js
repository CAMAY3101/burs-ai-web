import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../Contexts/authContext';
import { endpoint } from '../../Config/utils/urls';
import { address_form } from '../../Config/Schemas/yupSchemas.js';
import TextField from '../CustomizeComponents/TextField.jsx';
import SelectField from '../CustomizeComponents/SelectField.jsx'
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx'


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
    const [errors, setErrors] = useState({});

    async function handleSubmit() {
        const valuesToValidate = {
            calle,
            numExt,
            numInt,
            colonia,
            cp,
            municipio,
            estado,
            tipoVivienda,
        };
        try {
            await address_form.validate(valuesToValidate, { abortEarly: false });
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
            if (error.name === 'ValidationError') {
                // Mapeo de errores de Yup al estado
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                console.error(error);
            }
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

                {errors.calle && <p className="text-red-500 text-sm">{errors.calle}</p>}

                <div id='num ext e int' className='flex space-x-5' >
                    <TextField
                        type='text'
                        label='Numero Exterior'
                        placeholder='Ejemplo: 25'
                        value={numExt}
                        onValueChange={setNumExt}
                    />
                    {errors.numExt && <p className="text-red-500 text-sm">{errors.numExt}</p>}

                    <TextField
                        type='text'
                        label='Numero Interior'
                        placeholder='Ej: 25'
                        value={numInt}
                        onValueChange={setNumInt}
                        isRequired={false}
                    />
                    {errors.numInt && <p className="text-red-500 text-sm">{errors.numInt}</p>}
                </div>
                <div className='flex space-x-5' >
                    <TextField
                        type='text'
                        label='Colonia'
                        placeholder='Ejemplo: Del Valle'
                        value={colonia}
                        onValueChange={setColonia}
                    />
                    {errors.colonia && <p className="text-red-500 text-sm">{errors.colonia}</p>}
                    <TextField
                        isRequired
                        type='text'
                        label='C.P.'
                        placeholder='Ejemplo: 12345'
                        value={cp}
                        onValueChange={setCp}
                    />
                    {errors.cp && <p className="text-red-500 text-sm">{errors.cp}</p>}
                </div>

                <TextField
                    isRequired
                    type='text'
                    label='Municipio'
                    placeholder='Ejemplo: Nezahualcóyotl'
                    value={municipio}
                    onValueChange={setMunicipio}
                />
                {errors.municipio && <p className="text-red-500 text-sm">{errors.municipio}</p>}
                <TextField
                    isRequired
                    type='text'
                    label='Estado'
                    placeholder='Ejemplo: Estado de México'
                    value={estado}
                    onValueChange={setEstado}
                />
                {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}

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
                {errors.tipoVivienda && <p className="text-red-500 text-sm">{errors.tipoVivienda}</p>}
            </div>

            <Button1
                isDisabled={!calle || !numExt || !colonia || !cp || !municipio || !estado || !tipoVivienda}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default IngresaTuDomicilio