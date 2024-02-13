import React from 'react'

import { Input, Button } from "@nextui-org/react" 

function IngresaTusDatos() {
  return (
    <div className='flex flex-col items-center space-y-7 mt-9'>
        <ol class="flex items-center w-11/12  space-x-4 text-sm font-medium text-center text-gray-500">
            <li class="flex items-center text-blue-600 dark:text-blue-500">
                <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                    1
                </span>
                  Registro <span class="hidden sm:inline-flex sm:ms-2">de Datos</span>
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    2
                </span>
                    Verificación <span class="hidden sm:inline-flex sm:ms-2">de Datos</span>
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
            <li class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    3
                </span>
                  Solicitar <span class="hidden sm:inline-flex sm:ms-2">Prestamo</span>
            </li>
        </ol>

        <div className='w-11/12 flex flex-col space-y-5'>
            <h1> Ingresa tus datos </h1>
            <Input
                isRequired
                type='password'
                label='Nombre(s)'
                placeholder='Ejemplo: Juan'
                size='md'
                variant='bordered'
                
            />
            <Input
                isRequired
                type='password'
                label='Edad'
                placeholder='Ej: 25'
                size='md'
                variant='bordered'
            />
            <Input
                isRequired
                type='password'
                label='Telefono'
                placeholder='Ej: 55 1234 5678'
                size='md'
                variant='bordered'
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