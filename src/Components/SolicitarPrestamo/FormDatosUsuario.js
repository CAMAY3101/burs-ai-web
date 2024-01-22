import React, { useState } from 'react'
import { Input,Select, SelectItem, Checkbox } from "@nextui-org/react";

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

const styles_input = {
    input: [
        "rubik-Regular-16",
        "text-dark-blue-800",
        "placeholder:text-dark-blue-800",
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

const styles_select = {
    trigger: [
        "rounded-xl",
        "border-dark-blue-400",
        "data-[hover=true]:border-dark-blue-700",
        "data-[open=true]:border-dark-blue-900",
        "data-[focus=true]:border-dark-blue-900",
        "!cursor-text",
        "space-y-2",
    ],
    value:[
        "rubik-Regular-16",
        "text-dark-blue-800",
        
    ]
};

const style_label = 'rubik-Medium-15 text-dark-blue-950'


function FormDatosUsuario() {
    const [value, setValue] = useState("");
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
    };

    const handleSelectionChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='pt-5 px-4 space-y-5 lg:w-7/12'>
            <h3 className='rubik-Bold-23 text-purple-heart-900'>Tu historial</h3>
            <div className='w-full flex-col space-y-7'>
                <div className='w-1/2'>
                    <Input
                        type="Salario Mensual"
                        label=<div className={style_label}>Salario Mensual</div>
                        placeholder='Ejemplo: $15000'
                        variant='bordered'
                        labelPlacement='inside'
                        size='md'
                        classNames={styles_input}
                    />
                </div>
                <div>
                    <Select
                        label=<div className={style_label}>Ocupación</div>
                        className="max-w"
                        placeholder="Selecciona una opcion"
                        variant='bordered'
                        size='md'
                        classNames={styles_select}
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
                <div className='space-y-2'>
                    <Select
                        label=<div className={style_label}>Industria</div>
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                        classNames={styles_select}
                        selectedKeys={[value]}
                        onChange={handleSelectionChange}
                    >
                        {Object.keys(categorias).map((categoria) => (
                            <SelectItem value={categoria} key={categoria}>{categoria}</SelectItem>
                        ))}
                    </Select>
                    <Select
                        label=<div className={style_label}>Subindustria</div>
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                        classNames={styles_select}
                    >
                        {value && categorias[value] && categorias[value].map((subindustria) => (
                            <SelectItem value={subindustria} key={subindustria}>{subindustria}</SelectItem>
                        ))}
                    </Select>
                </div>
                <div className='space-y-2'>
                    <p className={style_label}>¿Te pagan a través de un banco?</p>
                    <div className='flex flex-col space-y-1'>
                        <Checkbox isSelected={isCheckedSi} onChange={handleCheckboxSiChange} color='secondary'>Si</Checkbox>
                        <Checkbox isSelected={isCheckedNo} onChange={handleCheckboxNoChange} color='secondary'>No</Checkbox>
                    </div>
                </div>
                <div className='w-fit'>
                    <Input
                        type="Salario familiar total al mes"
                        label=<div className={style_label}>Salario familiar total al mes</div>
                        placeholder='Ejemplo: $15000'
                        variant='bordered'
                        labelPlacement='inside'
                        size='md'
                    classNames={styles_input}
                    />
                </div>
                <div>
                    <Select
                        label=<div className={style_label}>¿Como consideras tu calificación crediticia?</div>
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                        classNames={styles_select}
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
                        label=<div className={style_label}>"¿Como usarias el prestamo?"</div>
                        className="max-w"
                        placeholder='Selecciona una opcion'
                        variant='bordered'
                        classNames={styles_select}
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