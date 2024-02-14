import React from 'react'

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
        "space-y-8"
    ]
};
function IngresaTusDatos() {
  return (
    <div className='flex flex-col items-center space-y-7 mt-9'>
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

        <div className='w-11/12 flex flex-col space-y-5'>
            <h1 className='font-rubik font-bold text-xl text-purple-heart-950'> Ingresa tus datos </h1>
            <Input
                isRequired
                type='password'
                label='Nombre(s)'
                placeholder='Ejemplo: Juan'
                size='md'
                variant='bordered'
                classNames={styles_input}
                
            />
            <Input
                isRequired
                type='password'
                label='Edad'
                placeholder='Ej: 25'
                size='md'
                variant='bordered'
                classNames={styles_input}
            />
            <Input
                isRequired
                type='password'
                label='Telefono'
                placeholder='Ej: 55 1234 5678'
                size='md'
                variant='bordered'
                classNames={styles_input}
            />
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