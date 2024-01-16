import React from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

import "../../Styles/SolicitarPrestamo.scss"

const styles = {
    input: [
        //"rubik-Regular-15",
        //"text-dark-blue-800",
        //"placeholder:text-dark-blue-200",
    ],
    inputWrapper: [
        "rounded-xl",
        "border-dark-blue-400",
        "data-[hover=true]:border-dark-blue-700",
        "group-data-[focus=true]:border-dark-blue-900",
        "!cursor-text",
    ]
}

function FormDatosUsuario() {
  return (
    <div className='pt-5 px-4 space-y-5 lg:w-7/12'>
        <h3>Tu historial</h3>
        <div className='w-full flex-col space-y-5'>
            <div className='w-1/2'>
                <Input
                    type="Salario Mensual"
                    label=<div className=''>Salario Mensual</div>
                    placeholder='Ejemplo: $15000'
                    variant='bordered'
                    labelPlacement='inside'
                    size='sm'
                    //classNames={styles}
                />
            </div>
            <div>
                <Select
                    label="Ocupación"
                    className="max-w"
                    placeholder='Selecciona una opcion'
                    variant='bordered'
                >
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                </Select>
            </div>
            <div>
                <Select
                    label="Industria"
                    className="max-w"
                    placeholder='Selecciona una opcion'
                    variant='bordered'
                >
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                </Select>
            </div>
            <div>
                <CheckboxGroup
                    label="¿Te pagan a través de un banco?"
                    className="max-w"
                >
                    <Checkbox value="1">Si</Checkbox>
                    <Checkbox value="2">No</Checkbox>
                </CheckboxGroup>
            </div>
            <div className='w-1/2'>
                <Input
                    type="Salario familiar total al mes"
                    label=<div className=''>Salario Mensual</div>
                    placeholder='Ejemplo: $15000'
                    variant='bordered'
                    labelPlacement='inside'
                    size='sm'
                    //classNames={styles}
                />
            </div>
            <div>
                <Select
                    label="¿Como consideras tu calificación crediticia?"
                    className="max-w"
                    placeholder='Selecciona una opcion'
                    variant='bordered'
                >
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                </Select>
            </div>
            <div>
                <Select
                    label="¿Como usarias el prestamo?"
                    className="max-w"
                    placeholder='Selecciona una opcion'
                    variant='bordered'
                >
                </Select>
            </div>
        </div>
    </div>
  )
}

export default FormDatosUsuario