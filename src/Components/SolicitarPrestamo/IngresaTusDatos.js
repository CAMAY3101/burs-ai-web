import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { usePhoneInput, FlagImage, defaultCountries, parseCountry, } from "react-international-phone";
import 'react-international-phone/style.css';

import { Input, Select, SelectItem } from "@nextui-org/react"
import toast from 'react-hot-toast';
import {datos_form} from '../../Config/Schemas/yupSchemas.js';

import { useAuthContext } from '../../Contexts/authContext';
import { endpoint } from '../../Config/utils/urls';
import TextField from '../CustomizeComponents/TextField.jsx';
import TitlePage from '../CustomizeComponents/TitlePage.jsx';
import Button1 from '../CustomizeComponents/Button1.jsx';

axios.defaults.withCredentials = true;

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

function IngresaTusDatos() {
    //----------------------Variables----------------------
    const { tokenExist, checkToken, navigateToNextStep } = useAuthContext();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    // Estado para manejar los errores de validación
    const [errors, setErrors] = useState({});

    //----------------------Cambiar formato de telefono----------------------

    // Busca el índice del país 'mx' (México) en la lista predeterminada
    const mexicoIndex = defaultCountries.findIndex((country) => parseCountry(country).iso2 === 'mx');

    // Si se encuentra el país 'mx', modifica su formato
    if (mexicoIndex !== -1) {
        const mexicoCountryData = defaultCountries[mexicoIndex];
        const [name, iso2, dialCode] = mexicoCountryData;
        const modifiedMexicoCountryData = [
            name,
            iso2,
            dialCode,
            '(..) .... ....', // Establece el formato deseado para México
        ];
        // Reemplaza el país 'mx' en la lista predeterminada con el país modificado
        defaultCountries[mexicoIndex] = modifiedMexicoCountryData;
    }

    //----------------------Propiedades de react-international-phone----------------------
    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
        usePhoneInput({
            defaultCountry: "mx",
            countries: defaultCountries,
            value: phone,
            onChange: (data) => {
                setPhone(data.phone);
            },
        });

    useEffect(() => {
        setCountry(country.iso2); // Actualizar el país seleccionado cuando cambie
    }, [country]);

    //----------------------coneccion API----------------------
    async function handleSubmit() {
        try {
            setErrors({});
            await datos_form.validate({ name, lastName, age, phone }, { abortEarly: false });
            const response = await axios.post(endpoint.usuarios.updateDataUser, {
                nombre: name,
                apellidos: lastName,
                edad: age,
                telefono: phone,
            });

            await checkToken();

            if (response.data.status === 'success' && tokenExist === true) {
                navigateToNextStep(2);
            }
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Mapea los errores de Yup al estado
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                toast.error('Error al actualizar los datos del usuario, intente de nuevo');
            }
        }
    }

    return (
        <div className='sm:w-11/12 lg:w-1/3 flex flex-col space-y-10'>
            <TitlePage title="Ingresa tus datos" />
            <div className='flex-col space-y-12'>
                <div>
                    <TextField
                        type='text'
                        label='Nombre(s)'
                        placeholder='Ejemplo: Juan'
                        value={name}
                        onValueChange={setName}
                        errorMessage={errors.name}
                    />
                </div>
                <div>
                    <TextField
                        type='text'
                        label='Apellido(s)'
                        placeholder='Ejemplo: Perez Lopez'
                        value={lastName}
                        onValueChange={setLastName}
                        errorMessage={errors.lastName}
                    />
                </div>
                <div className='w-1/2'>
                    <TextField
                        type='number'
                        label='Edad'
                        placeholder='Ej: 25'
                        className='w-1/2'
                        min={18}
                        max={100}
                        value={age}
                        onValueChange={setAge}
                        errorMessage={errors.age}
                    />
                </div>
                <div>
                    <Input
                        isRequired
                        type='tel'
                        label='Telefono'
                        placeholder='Ej: 55 1234 5678'
                        size='md'
                        variant='bordered'
                        classNames={styles_input}
                        labelPlacement='outside'
                        startContent={
                            <div className='flex items-center'>
                                <Select
                                    value={country.iso2}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder={<FlagImage iso2={country.iso2} />}
                                    renderValue={(value) => (
                                        <FlagImage iso2={country.iso2} />
                                    )}
                                    className='w-[50px]'
                                    classNames={{
                                        trigger: [
                                            "shadow-none",
                                            "bg-transparent",
                                            "rounded-none",
                                            "p-0",
                                            "min-h-unit-5",
                                            "h-6"
                                        ],
                                        innerWrapper: [
                                            "group-data-[has-label=true]:pt-0",
                                        ],
                                    }}
                                    popoverProps={{
                                        classNames: {
                                            base: "w-[200px]",
                                        },
                                    }}
                                >
                                    {defaultCountries.map((c) => {
                                        const parsedCountry = parseCountry(c);
                                        return (
                                            <SelectItem key={parsedCountry.iso2} value={parsedCountry.iso2}>
                                                <div className="flex gap-2 items-center">
                                                    <FlagImage iso2={parsedCountry.iso2} className='flex-shrink-0' style={{ width: '24px', height: '24px' }} />
                                                    <div className="flex flex-col">
                                                        <span className="text-small">{parsedCountry.name}</span>
                                                        <span className="text-tiny text-default-400">({parsedCountry.dialCode})</span>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                        );
                                    })}
                                </Select>
                            </div>
                        }
                        value={inputValue}
                        onChange={handlePhoneValueChange}
                        inputRef={inputRef}
                        errorMessage={errors.phone}
                    />
                </div>
            </div>

            <Button1
                isDisabled={!name || !lastName || !age || !phone}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default IngresaTusDatos