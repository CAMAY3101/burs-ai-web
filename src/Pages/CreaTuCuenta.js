import React from 'react'

import bursColorIcon from "../Assets/icons/burs-color-icon.png"

import {Input, Button} from "@nextui-org/react"

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

function CreaTuCuenta() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center space-y-2 my-9'>
            <img className='w-20' alt='icon-color-burs' src={bursColorIcon}/>
            <h1 className='font-rubik font-bold text-xl text-purple-heart-950'>Crea tu cuenta</h1>
        </div>
        <div className='w-10/12 space-y-8 py-4'>
            <Input
                isRequired
                type='email'
                label = 'Correo Electrónico'
                placeholder='ejemplo@outlook.com'
                size='md'
                variant='bordered'
                classNames={styles_input}
            />
            <div className='space-y-4'>
                <Input
                    isRequired
                    type='password'
                    label='Contraseña'
                    placeholder='Ingresa contraseña'
                    size='md'
                    variant='bordered'
                    classNames={styles_input}
                />
                <ul className="space-y-1 pl-2 font-rubik font-regular text-[9px] text-purple-950">
                    <li>
                        Contraseña debe tener mínimo 8 caracteres. 
                    </li>
                    <li >
                        Al menos una letra minúscula 
                    </li>
                    <li >
                        Al menos una letra mayúscula.
                    </li>
                    <li >
                        Al menos un número 
                    </li>
                    <li >
                        Al menos un caracter especial
                    </li>
                </ul>
            </div>
            <Button
                size='md'
                className='w-full bg-purple-heart-500 text-purple-50 rounded-3xl'
            >
                Crear Cuenta
            </Button>
        </div>
    </div>
  )
}

export default CreaTuCuenta