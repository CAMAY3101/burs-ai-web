import React, { useState } from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

import "../../Styles/SolicitarPrestamo.scss"

const categorias = {
    "Gobierno": ["Seguridad pública", "Fuerzas armadas", "Federal", "Estatal municipal", "Otros"],
    "Salud y belleza": ["Farmacéutica", "Médica", "Nutrición cuidado personal", "Belleza", "Otros"],
    "Educación": ["Básica", "Media", "Superior", "Otros"],
    "Manufactura": ["Automotriz", "Electrónica", "Metal mecánico", "Textil", "Otros"],
    "Transporte y automotriz": ["Taxi y aplicaciones", "Público y privado", "Mensajería", "Reparación y mantenimiento", "Otros"],
    "Servicio y comercio": ["Supermercado y abarrotes", "Alimentos", "Departamento y moda", "Bienes raíces", "Construcción", "Limpieza", "Seguridad privada", "Gasolinera y gas", "Electricidad y gas", "Electricidad y agua", "Otros"],
    "Servicios profesionales": ["Consultoría", "Contabilidad", "Investigación y desarrollo", "Finanzas", "Legales", "Publicidad y mercadotecnia", "Seguros", "Otros"],
    "Campos e industria": ["Agricultura", "Ganadería y pesca", "Minería", "Petrolera", "Otros"],
    "Hospitalidad y turismo": ["Hotelería", "Viajes", "Turismo y otros"],
    "Restaurante": ["Restaurante", "Bar", "Cafeterías", "Fonda", "Otros"],
    "Recreación y cultura": ["Arte y cultura", "Entretenimiento", "Otros"],
    "Tecnología y comunicación": ["Medios de comunicación", "Desarrollo de software", "Reparador y soporte", "Imprenta", "Call center", "Telefonía e internet", "Editorial", "Otros"]
};

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
    const [value, setValue] = React.useState("");
    const [isCheckedSi, setIsCheckedSi] = useState(false);
    const [isCheckedNo, setIsCheckedNo] = useState(false);

    const handleCheckboxSiChange = () => {
        setIsCheckedSi(!isCheckedSi);
        // Si marcamos "Sí", desmarcamos "No"
        if (isCheckedNo) {
            setIsCheckedNo(!isCheckedNo);
        }
    };

    const handleCheckboxNoChange = () => {
        setIsCheckedNo(!isCheckedNo);
        // Si marcamos "No", desmarcamos "Sí"
        if (isCheckedSi) {
            setIsCheckedSi(!isCheckedSi);
        }
    }

    const handleSelectionChange = (e) => {
        setValue(e.target.value);
    };

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
                        <SelectItem value="Soy dueño de un negocio">Soy dueño de un negocio</SelectItem>
                        <SelectItem value="Trabajo por mi cuenta">Trabajo por mi cuenta</SelectItem>
                        <SelectItem value="Trabajo en una empresa">Trabajo en una empresa</SelectItem>
                        <SelectItem value="Ama de casa">Ama de casa</SelectItem>
                        <SelectItem value="Estudiante">Estudiante</SelectItem>
                        <SelectItem value="Jubilado">Jubilado</SelectItem>
                        <SelectItem value="Desempleado">Desempleado</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                    </Select>
                </div>
                <div>
                    <Select
                        label="Industria"
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                        selectedKeys={[value]}
                        onChange={handleSelectionChange}
                    >
                        {Object.keys(categorias).map((categoria) => (
                            <SelectItem value={categoria} key={categoria}>{categoria}</SelectItem>
                        ))}
                    </Select>
                    <Select
                        label="Subindustria"
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                    >
                        {value && categorias[value] && categorias[value].map((subindustria) => (
                            <SelectItem value={subindustria} key={subindustria}>{subindustria}</SelectItem>
                        ))}
                    </Select>
                </div>
                <div>
                    <p>¿Te pagan a través de un banco?</p>
                    <Checkbox isSelected={isCheckedSi} onChange={handleCheckboxSiChange}>Si</Checkbox>
                    <Checkbox isSelected={isCheckedNo} onChange={handleCheckboxNoChange}>No</Checkbox>
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
                        <SelectItem value="Buena">Buena</SelectItem>
                        <SelectItem value="Regular">Regular</SelectItem>
                        <SelectItem value="Mala">Mala</SelectItem>
                        <SelectItem value="No tengo">No tengo</SelectItem>
                        <SelectItem value="No se">No se</SelectItem>
                    </Select>
                </div>
                <div>
                    <Select
                        label="¿Como usarias el prestamo?"
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                    >
                        <SelectItem value ="Inversion">Inversion</SelectItem>
                        <SelectItem value ="Educacion">Educacion</SelectItem>
                        <SelectItem value="Hogar">Hogar</SelectItem>
                        <SelectItem value="Auto">Auto</SelectItem>
                        <SelectItem value="Gastos">Gastos</SelectItem>
                        <SelectItem value="Deudas">Deudas</SelectItem>
                        <SelectItem value="Salud">Salud</SelectItem>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default FormDatosUsuario