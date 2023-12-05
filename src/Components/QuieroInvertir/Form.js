import React from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";

import imgForm from "../../Assets/QuieroInvertir/form.jpg"
import '../../Styles/QuieroInvertir.scss'

const styles = {
    input: [
        "rubik-Regular-15",
        "text-dark-blue-800",
        "placeholder:text-dark-blue-200",
    ],
    inputWrapper: [
        "rounded-3xl",
        "border-dark-blue-400",
        "data-[hover=true]:border-dark-blue-700",
        "group-data-[focus=true]:border-dark-blue-900",
        "!cursor-text",
    ]
}

function Form() {
  return (
    <div>
        <div className='flex flex-col md:flex-row mb-12'>
            <div className='w-4/12 flex flex-col hidden md:block'>
                <img src={imgForm} alt='imgform' className=''/>
            </div>
              
            <div id='form' className='w-full md:w-8/12 flex flex-col items-center'>
                <h2 className="rubik-Bold-29 mb-10 text-dark-blue-900">Contactanos</h2>
                <div className="w-10/12 space-y-8">
                    <Input 
                        type="name" 
                        label= <div className='rubik-Medium-18 text-dark-blue-700'>Nombre Completo</div> 
                        placeholder='Ejemplo: Esteban Garcia Garcia' 
                        variant='bordered'
                        labelPlacement='outside'
                        size='lg'
                        classNames={styles}
                     />
                    <div className="flex md:flex-row space-x-8 ">
                        <Input 
                            type="email" 
                            label=<div className='rubik-Medium-18 text-dark-blue-700'>Correo Electronico</div>
                            placeholder='ejemplo@outlook.com' 
                            variant='bordered'
                            labelPlacement='outside'
                            size='lg'
                            classNames={styles} 
                        />
                        <Input 
                            type="tel" 
                            label= <div className='rubik-Medium-18 text-dark-blue-700'>Telefono</div> 
                            placeholder='Ejemplo: (33) 3333 3333' 
                            variant='bordered' 
                            labelPlacement='outside'
                            size='lg'
                            classNames={styles}
                        />
                    </div>
                    <Textarea 
                        label=<div className='rubik-Medium-18 text-dark-blue-700'>Mensaje</div> 
                        placeholder="Escribe aqui tu mensaje"
                        variant='bordered'
                        labelPlacement='outside'
                        classNames={styles}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-dark-blue-500 to-dark-blue-700 text-dark-blue-100 rubik-Medium-18"
                        radius='lg'
                    >
                        Enviar Mensaje
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Form