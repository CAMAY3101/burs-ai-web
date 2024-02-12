import React from 'react'

import bursColorIcon from "../Assets/icons/burs-color-icon.png"

import {Input, Button} from "@nextui-org/react"

function CreaTuCuenta() {
  return (
    <div className='flex flex-col items-center space-y-8 pt-4'>
        <div className='flex flex-col items-center'>
            <img className='w-24' alt='icon-color-burs' src={bursColorIcon}/>
            <h1>Sign Up</h1>
        </div>
        <div className='w-10/12 space-y-6'>
            <Input
                type='email'
                label= 'email'
                placeholder='example@outlook.com'
                size='md'
                variant='bordered'
            />
            <div className='space-y-2'>
                <Input
                    type='password'
                    label='password'
                    placeholder='Enter password'
                    size='md'
                    variant='bordered'
                />
                <ul className="text-sm">
                    <li>
                        Password should be at least 8 characters long
                    </li>
                    <li >
                        Password should contain at least one lowercase letter
                    </li>
                    <li >
                        Password should contain at least one uppercase letter
                    </li>
                    <li >
                        Password should contain at least one number
                    </li>
                    <li >
                        Password should contain at least one special character
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