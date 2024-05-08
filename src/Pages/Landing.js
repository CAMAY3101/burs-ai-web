import React from 'react'
import { Rating } from '@douyinfe/semi-ui';
import { Card, CardHeader, CardBody, CardFooter, Accordion, AccordionItem, Divider } from "@nextui-org/react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cash from '../Assets/Landing/cash.png'
import inspection from '../Assets/Landing/inspection.png'
import smilingFace from '../Assets/Landing/smiling-face.png'
import WinIcon from '../Assets/Landing/win.png'
import TimeIcon from '../Assets/Landing/time.png'
import secuirtyimage from '../Assets/Landing/seguridad.webp'
import FQAS from '../Assets/Landing/faqs2.png'

const sizeIcon = "w-14 h-14 iconHero"
const backgroundIconClass = "rounded-full w-20 h-20 flex items-center justify-center mb-4 bg-persian-rose-50/50"
const subtitleIconClass = "text-center text-persian-rose-100 rubik-Medium-23"
const textIconClass = "text-center text-persian-rose-100 rubik-Medium-18"

const backgroundIconClassRecompensa = "bg-dark-blue-100 rounded-full flex items-center justify-center w-24 h-24 md:w-24 md:h-24 lg:w-28 lg:h-28"
const sizeIconRecompensa = "w-16 h-16 md:w-16 md:h-16 lg:w-20 lg:h-20"

const subtitleCardClass = "rubik-Medium-29 text-purple-heart-900 text-center md:text-[28px] lg:text-4xl"
const textCardClass = "rubik-Regular-18 text-purple-heart-500 text-center md:text-lg lg:text-2xl"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Landing = () => {
  return (
    <div>
      <div id='proceso'>
        <div className="bg-cover bg-center h-screen flex items-center justify-center px-10 mb-10 sm:justify-end md:px-10 cover-hero">
          <div className="flex flex-col justify-end space-y-2 sm:space-y-10">
            <div className="mb-10 text-center">
              <span className="text-dark-blue-50 rubik-Bold-18 sm:text-4xl">
                Recibe tu préstamo
              </span>
              <br />
              <span className="text-persian-rose-300 rubik-Bold-23 sm:text-5xl">
                seguro y en minutos
              </span>
              <br />
              <span className="text-dark-blue-50 rubik-Bold-18 sm:text-4xl">
                en solo 3 pasos
              </span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-16 md:space-x-24" >
              <div className="flex flex-col items-center">
                <div className={backgroundIconClass}>
                  <img src={cash} alt="Icon" className={sizeIcon} />
                </div>
                <p className={subtitleIconClass}>Selecciona</p>
                <p className={textIconClass}>el dinero que necesitas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className={backgroundIconClass}>
                  <img src={inspection} alt="Icon" className={sizeIcon} />
                </div>
                <p className={subtitleIconClass}>Completa</p>
                <p className={textIconClass}>el formulario</p>
              </div>
              <div className="flex flex-col items-center">
                <div className={backgroundIconClass}>
                  <img src={smilingFace} alt="Icon" className={sizeIcon} />
                </div>
                <p className={subtitleIconClass}>Disfruta</p>
                <p className={textIconClass}>una vez aprobado el prestamo</p>
              </div>
            </div>
          </div>
      </div>
      </div>

      <div id='recompensa'>
        <div className="flex flex-col mb-10 space-y-32 md:px-7 md:items-center md:space-y-20 lg:space-y-32 lg:px-36">
          <h1 className="rubik-Bold-45 text-center sm:text-5xl lg:text-7xl title-recompensa">El credito que confia en ti</h1>
          <div className="flex flex-col justify-center space-y-20 px-4 sm:px-0 lg:px-5 sm:flex-row sm:space-y-0 md:space-x-20">
            <div className="flex flex-col items-center space-y-11">
              <div className={backgroundIconClassRecompensa}>
                <img src={TimeIcon} alt="Icon" className={sizeIconRecompensa} />
              </div>
              <div className='space-y-7'>
                <h2 className={subtitleCardClass}>¡Prestamos al instante!</h2>
                <p className={textCardClass}>Recibe tu crédito en línea aprobado en menos de 15 minutos. Sin intermediarios ¡todo desde tu celular o computadora!</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-11">
              <div className={backgroundIconClassRecompensa}>
                <img src={WinIcon} alt="Icon" className={sizeIconRecompensa} />
              </div>
              <div className='space-y-7'>
                <h2 className={subtitleCardClass}>Recompensa burs ai</h2>
                <p className={textCardClass}>Puedes ganar dinero por invitar a otros a usar Burs ai, hasta $100 MXN por cada invitado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='opiniones'>
        <div className="py-10 mb-12 space-y-10  bg-gradient-to-r from-[#4A12CB] via-[#8218DB] to-[#BC1FEC]">
          <div className="rubik-Bold-36 md:text-[56px] text-center title-opiniones ">Lo que opinan de nosotros</div>
          <div className="w-10/12 m-auto ">
            <Slider className='' {...settings}>
              {testimonios.map((testimonio, index) => (
                <Card className="p-3 bg-[#a277eb]/[0.67] shadow-[0_12px_25px_0_(6, 28, 61, 0.15)] rounded-2xl">
                  <CardHeader className="flex">
                    <div className="flex flex-col">
                      <p className="rubik-Medium-23 text-persian-rose-50">{testimonio.nombre}</p>
                      <p className="rubik-Medium-15 text-persian-rose-200">{testimonio.ocupacion}</p>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className='rubik-Regular-18 text-dark-blue-50'>{testimonio.opinion}</p>
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

      <div id='security'>
        <div className="flex flex-col md:flex-row lg:flex-row mb-12">

          <div className="w-full md:w-5/12 flex justify-center items-center">
            <img className="lg:w-full" src={secuirtyimage} alt="" />
          </div>
          <div className="w-full md:w-7/12 lg:w-1/2 flex justify-center items-center">
            <div className="w-3/4 md:w-full lg:w-3/4 space-y-8">
              <h3>
                <span className='text-dark-blue-800 rubik-Bold-23 md:text-3xl lg:text-[45px] lg:mb-5'>Burs ai tu espacio seguro <br /></span>
                <span className='text-purple-heart-400 rubik-Bold-18 md:text-2xl lg:text-4xl '> Confiamos en ti </span>
                <span className='text-purple-heart-900 rubik-Bold-18 md:text-2xl lg:text-4xl'>y </span>
                <span className='text-purple-heart-600 rubik-Bold-18 md:text-2xl lg:text-4xl'>tú </span>
                <span className='text-purple-heart-900 rubik-Bold-18 md:text-2xl lg:text-4xl'>puedes  <br /></span>
                <span className='text-dark-blue-900 rubik-Bold-15 md:text-2xl lg:text-4xl'>confiar en nosotros.</span>
              </h3>
              <p className="text-dark-blue-900 rubik-Regular-15 md:text-xl lg:text-3xl"> Jamás tendremos practicas de cobranza abusivas ni buscaremos a tus contactos ni referidos</p>
            </div>
          </div>
        </div>
      </div>
      
      <div id='faqs'>
        <div className="flex flex-col lg:flex-row  justify-center mb-12 px-2 md:px-5">
          <div className="w-full lg:w-3/4 p-4">
            <div className="rubik-Bold-32 text-dark-blue-700 sm:text-[45px]">Preguntas frecuentes</div>
            <Divider className="my-4" />
            <div className="p-4">
              <Accordion className='accordion-faqs p-2'>
                {faqs.map((item, index) => (
                  <AccordionItem key={index}
                    title={
                      <div className='my-1 px-4 rubik-Medium-18 text-purple-heart-950'>
                        {item.pregunta}
                      </div>
                    }>
                    <div className='rubik-Regular-15 px-4 text-dark-blue-950' >
                      {item.respuesta}
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="flex justify-center items-center lg:block lg:w-1/2">
            <img className="w-11/12" src={FQAS} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

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