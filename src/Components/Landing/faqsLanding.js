import React from 'react'
import FQAS from '../../Assets/Landing/faqs.png'

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import "../../Styles/Landing.scss"

function faqsLanding() {
    return (
        <div className="flex flex-col md:flex-row  justify-center Faqs">
            <div className="md:w-1/2 p-4">
                <div className="p-4 titleFaqs rubik-Bold-45">Preguntas frecuentes</div>
                <Divider className="my-4 dividerFaqs" />
                <div className="p-4">
                    <Accordion className='accordionFaqs p-2'>
                        {faqs.map((item, index) => (
                            <AccordionItem key={index} 
                            title={
                                <div className='my-1 px-4 rubik-Medium-18 questionFaqs'>
                                    {item.pregunta}
                                </div>
                            }>
                                <div className='rubik-Regular-15 px-4 answerFaqs' >
                                    {item.respuesta}
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={FQAS} alt="Random Image" className="w-11/12" />
            </div>
        </div>
    )
}

export default faqsLanding

const faqs = [
    {
        pregunta: "¿Qué es Préstamo Personal, antes BURS AI?",
        respuesta: "Ahora los llamamos Préstamos Personales BURS AI. Es el servicio con el cual puedes pedir un préstamo desde $500 m.n. hasta $10,000 m.n., es fácil, rápido y seguro. El proceso es 100% en línea, sin necesidad de aval ni largos trámites. Además, tú eliges en cuántos días pagar y si pagas antes, pagas menos."
    },
    {
        pregunta: "¿Cuáles son los requisitos de contratación?",
        respuesta: "Ser mayor de edad, ser de nacionalidad mexicana, una cuenta bancaria propia, credencial para votar original vigente."
    },
    {
        pregunta: "¿Burs ai es seguro?",
        respuesta: "Es seguro, ya que es una entidad financiera registrada ante CONDUSEF y supervisada por la Comisión Nacional Bancaria y de Valores (CNBV)."
    },
    {
        pregunta: "¿Cuántas veces puedo usar BURS AI?",
        respuesta: "No hay un límite, tú decides si solo necesitas 1, 2 o las veces que quieras. El único requisito para hacer otra solicitud es haber pagado el préstamo o crédito con Bursa i anterior, una vez liquidado y registrado en nuestro sistema, ya puedes solicitar otro."
    }
];