import React, { useState } from 'react';
import { CountrySelector, PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import { Input, Button } from "@nextui-org/react" 

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
const countrySelectorStyleProps = {
    style: {
        backgroundColor: 'lightblue', // Personaliza el fondo del contenedor del CountrySelector
    },
    className: 'custom-country-selector', // Añade una clase personalizada al contenedor
    buttonStyle: {
        border: 'none', // Quita el borde del botón del CountrySelector
        //width: '30px', // Personaliza el ancho del botón del CountrySelector
    },
    flagStyle: {
        width: '20px', // Personaliza el ancho de la bandera
        //height: 'auto', // Ajusta la altura automáticamente
    },
    dropdownArrowStyle: {
        color: 'green', // Cambia el color de la flecha del desplegable
    },
    dropdownStyleProps: {
        backgroundColor: 'lightblue', // Personaliza el fondo del menú desplegable
    },
};

function IngresaTusDatos() {
    const [phone, setPhone] = useState('');
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
                <h1 className='font-rubik font-bold text-xl text-purple-heart-950'> Ingresa tus datos </h1>
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
                            <CountrySelector
                                selectedCountry="mx"
                                onSelected={(country) => console.log(country)}
                                {...countrySelectorStyleProps}
                            />
                        }
                    />
                </div>
                
                <Button
                    size='large'
                    color='secondary'
                >
                Continuar
                </Button>
            </div>
        </div>
    )
}

export default IngresaTusDatos