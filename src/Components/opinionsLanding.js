import React from 'react'
import { Rating } from '@douyinfe/semi-ui';
import { Card, CardHeader, CardBody, CardFooter, } from "@nextui-org/react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const opionesContainer = "container pb-10 Opiniones"
const titleOpinionesClass = "pt-5 mb-10 text-center titleOpiniones rubik-Bold-56"
const sliderContainer = "w-10/12 m-auto "

function opinionsLanding() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div id='opiniones'>
            <div className={opionesContainer}>
                <div className={titleOpinionesClass}>Lo que opinan de nosotros</div>
                <div className={sliderContainer}>
                    <Slider {...settings}>
                    {testimonios.map((testimonio, index) => (
                        <Card className="p-3 cardOpinion">
                            <CardHeader className="flex">
                                <div className="flex flex-col">
                                    <p className="rubik-Medium-23 nombreCardOpinion">{testimonio.nombre}</p>
                                    <p className="rubik-Medium-15 cargoCardOpinion">{testimonio.ocupacion}</p>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p className='rubik-Regular-18 textCardOpinion'>{testimonio.opinion}</p>
                            </CardBody>
                            <CardFooter>
                                <Rating size="small" defaultValue={5} />
                            </CardFooter>
                        </Card>
                    ))}
                </Slider>
                </div>
            </div>
        </div>
    );
}

// <div className="bg-white p-6 rounded-lg shadow-lg mb-4 space-y-5">
//     <div className="flex items-center space-y-2">
//         <div>
//             <p className="text-gray-800 font-bold">{testimonio.nombre}</p>
//             <p className="text-gray-600">{testimonio.ocupacion}</p>
//         </div>
//     </div>
//     <p className="text-gray-800 text-lg mb-2">"{testimonio.opinion}"</p>
//     <Rating size="small" defaultValue={5} />
// </div>
export default opinionsLanding

const testimonios = [
    {
        opinion: "BURS AI es una bendición financiera. Me ha ayudado en más de una ocasión a superar imprevistos económicos. ¡Recomendado!",
        nombre: "Daniela",
        ocupacion: "Contadora"
    },
    {
        opinion: "Como madre soltera, la rapidez de BURS AI ha sido un alivio. Sin complicaciones, sin esperas, y un gran apoyo cuando más lo necesito.",
        nombre: "Rosa",
        ocupacion: "Enfermera"
    },
    {
        opinion: "Soy cliente leal de BURS AI y no puedo estar más satisfecho. Su servicio siempre ha sido rápido y confiable. ¡Gran trabajo!",
        nombre: "Carlos",
        ocupacion: "Ingeniero"
    },
    {
        opinion: "BURS AI es la solución a problemas financieros inmediatos. Como freelancer, su velocidad es crucial para mí. ¡Gracias!",
        nombre: "Laura",
        ocupacion: "Diseñadora Gráfica"
    },
    {
        opinion: "Esta empresa hace que solicitar préstamos sea un juego de niños. Me encanta lo rápido que resuelven mis necesidades.",
        nombre: "Eduardo",
        ocupacion: "Profesor"
    },
    {
        opinion: "BURS AI me permitió cumplir mis sueños sin preocuparme por el dinero. ¡Realmente aprecio su rapidez y eficiencia!",
        nombre: "Marcela",
        ocupacion: "Empresaria"
    },
    {
        opinion: "No puedo dejar de elogiar a BURS AI. Su proceso sin papeleos y aprobación instantánea me ha sacado de apuros en varias ocasiones.",
        nombre: "David",
        ocupacion: "Abogado"
    },
    {
        opinion: "Solicitar un préstamo con BURS AI es una brisa fresca en comparación con otros servicios. Como chef, valoro la rapidez y la simplicidad.",
        nombre: "Adriana",
        ocupacion: "Chef"
    },
    {
        opinion: "El equipo de BURS AI es excepcional. Su profesionalismo y empatía son notables, y hacen que el proceso sea sin estrés.",
        nombre: "Manuel",
        ocupacion: "Médico"
    },
    {
        opinion: "BURS AI es mi elección número uno cuando se trata de préstamos. Su aprobación en minutos me ha salvado más de una vez.",
        nombre: "Lorena",
        ocupacion: "Psicóloga"
    },
    {
        opinion: "Como dueño de un pequeño negocio, BURS AI es un recurso invaluable. Su rapidez y facilidad de uso son inigualables.",
        nombre: "Francisco",
        ocupacion: "Empresario"
    },
    {
        opinion: "No tengo palabras suficientes para agradecer a BURS AI. Su servicio ha mejorado mi historial crediticio y mi vida financiera.",
        nombre: "Natalia",
        ocupacion: "Estudiante"
    },
    {
        opinion: "BURS AI ha demostrado ser un socio confiable en tiempos de necesidad financiera. ¡Son un gran alivio en momentos de apuro!",
        nombre: "Alejandro",
        ocupacion: "Arquitecto"
    },
    {
        opinion: "La eficacia de BURS AI es impresionante. No puedo imaginar cómo sobreviviría sin su velocidad y facilidad de uso.",
        nombre: "Valentina",
        ocupacion: "Traductora"
    },
    {
        opinion: "Siempre elijo a BURS AI cuando necesito un préstamo rápido. La aprobación sin complicaciones me ha ganado por completo.",
        nombre: "Rodrigo",
        ocupacion: "Comerciante"
    },
    {
        opinion: "BURS AI es un auténtico salvavidas financiero. Su rapidez y simplicidad son incomparables. ¡Los recomendaría a cualquiera!",
        nombre: "Mariana",
        ocupacion: "Gerente de Proyectos"
    },
    {
        opinion: "BURS AI ha hecho que mi vida sea más fácil. Su servicio sin rodeos y la capacidad de generar un historial crediticio son invaluables.",
        nombre: "Luis",
        ocupacion: "Electricista"
    }
];