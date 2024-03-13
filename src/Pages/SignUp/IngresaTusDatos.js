import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "../../Styles/Common.scss";

import { usePhoneInput, FlagImage, defaultCountries, parseCountry,} from "react-international-phone";
import 'react-international-phone/style.css';

import { Input, Button, Select, SelectItem } from "@nextui-org/react" 
import toast, { Toaster } from 'react-hot-toast';

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
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    
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

    //----------------------Porpiedades de react-international-phone----------------------
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
    const handleSubmit = async () => {
        try{
            const response = await axios.post('http://localhost:3001/usuarios/updateDataUser', {
                nombre: name,
                apellidos: lastName,
                edad: age,
                telefono: phone,
            });
            if (response.data.status === 'success'){
                navigate('/verificar-correo'); // Redirige a la página de verificación de correo
            }
        }catch(error){
            toast.error('Error al actualizar los datos del usuario, intente de nuevo')
        }
    };

    return (
        <div className='flex flex-col items-center space-y-14 mt-9'>
            <ol class="flex items-center w-11/12  space-x-4">
                <li class="flex items-center text-purple-heart-700/80 font-rubik font-medium text-sm">
                    <span class="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-700/80 rounded-full shrink-0">
                        1
                    </span>
                    Registro <span class="hidden sm:inline-flex sm:ms-2">de Datos</span>
                    <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                    </svg>
                </li>
                <li class="flex items-center text-purple-heart-200 font-rubik font-medium text-sm">
                    <span class="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-200 rounded-full shrink-0">
                        2
                    </span>
                        Verificación <span class="hidden sm:inline-flex sm:ms-2">de Datos</span>
                    <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                    </svg>
                </li>
                <li class="flex items-center text-purple-heart-200 font-rubik font-medium text-sm">
                    <span class="flex items-center justify-center w-6 h-6 me-2 font-rubik font-medium text-sm text-dark-blue-50 bg-purple-heart-200 rounded-full shrink-0">
                        3
                    </span>
                    Solicitar <span class="hidden sm:inline-flex sm:ms-2">Prestamo</span>
                </li>
            </ol>

            <div className='w-11/12 flex flex-col space-y-10'>
                <h1 className='font-rubik font-bold text-xl text-purple-heart-950'> Ingresa tus datos</h1>
                <div className='flex-col space-y-12'>
                    <Input
                        isRequired
                        type='text'
                        label='Nombre(s)'
                        placeholder='Ejemplo: Juan'
                        size='md'
                        variant='bordered'
                        classNames={styles_input}
                        labelPlacement='outside'
                        value={name}
                        onValueChange={setName}
                    />
                    <Input
                        isRequired
                        type='text'
                        label='Apellido(s)'
                        placeholder='Ejemplo: Perez Lopez'
                        size='md'
                        variant='bordered'
                        classNames={styles_input}
                        labelPlacement='outside'
                        value={lastName}
                        onValueChange={setLastName}
                    />
                    <Input
                        isRequired
                        type='number'
                        label='Edad'
                        placeholder='Ej: 25'
                        size='md'
                        variant='bordered'
                        classNames={styles_input}
                        labelPlacement='outside'
                        className='w-1/2'
                        min={18}
                        max={100}
                        value={age}
                        onValueChange={setAge}
                    />
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
                                    placeholder={<FlagImage iso2={country.iso2}  />}
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
                    />  
                </div>
                
                <Button
                    size='large'
                    color='secondary'
                    isDisabled={!name || !lastName || !age || !phone}
                    onClick = {handleSubmit}
                >
                Continuar
                </Button>
            </div>
        </div>
    )
}

export default IngresaTusDatos