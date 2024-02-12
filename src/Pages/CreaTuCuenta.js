import React from 'react'

import bursColorIcon from "../Assets/icons/burs-color-icon.png"

import {Input, Button} from "@nextui-org/react"

function CreaTuCuenta() {
  return (
    <div className='flex flex-col items-center space-y-8 pt-4'>
        <div className='flex flex-col items-center'>
            <img className='w-24' alt='icon-color-burs' src={bursColorIcon}/>
            <h1>Crea tu cuenta</h1>
        </div>
        <div className='w-10/12 space-y-6'>
            <Input
                type='email'
                label= 'Correo Electrónico'
                placeholder='ejemplo@outlook.com'
                size='md'
                variant='bordered'
            />
            <div className='space-y-2'>
                <Input
                    type='password'
                    label='Contraseña'
                    placeholder='Ingresa contraseña'
                    size='md'
                    variant='bordered'
                />
                <ul className="text-sm">
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
                className='w-full'
            >
                Crear Cuenta
            </Button>
        </div>
    </div>
  )
}

export default CreaTuCuenta