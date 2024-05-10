import React from 'react'

// import Simulador from '../Components/QuieroInvertir/Simulador'
// import Retorno from '../Components/QuieroInvertir/Retorno'
// import Form from '../Components/QuieroInvertir/Form'

import relacionIcon from "../Assets/QuieroInvertir/relacion.png"
import inversionesIcon from "../Assets/QuieroInvertir/inversiones.png"
import diversificacionIcon from "../Assets/QuieroInvertir/diversificacion.png"
import simuladorpng from '../Assets/QuieroInvertir/simulador.webp'

import '../Styles/QuieroInvertir.scss'

const cardContainer = "w-full md:w-1/3 flex flex-col items-center"

const backgroundIconClass = "w-28 h-28  mb-10 rounded-full flex items-center justify-center bg-color-dark-blue-50"
const sizeIcon = "w20- h-20"
const subtitleCardClass = "mt-6 text-lg font-medium mb-4 text-center text-purple-heart-900 font-rubik font-medium text-[23px]"
const textCardClass = "mt-2 text-sm text-center text-dark-blue-600 font-rubik font-regular text-base px-5"


function QuieroInvertir() {
  return (
    <div>
      <div id='heroQI'>
        <div className="bg-cover bg-center h-screen flex items-center justify-center px-10 mb-10 lg:justify-end md:px-10 lg:px-40 cover-hero-QI">
          <div className="flex flex-col justify-end text-center space-y-5 md:space-y-10">
            <h3 className='bg-persian-rose-600/60 text-persian-rose-100 rubik-ExtraBold-70 tracking-wider md:text-[95px]'>
              INVIERTE<br />
            </h3>
            <h3 className='text-dark-blue-50 rubik-ExtraBold-32 tracking-wider md:text-[50px]'>
              Y VE CRECER <br />
            </h3>
            <h3 className='text-dark-blue-50 rubik-ExtraBold-32 tracking-wider md:text-[50px]'>
              TU DINERO <br />
            </h3>
            <h3 className='text-persian-rose-50 rubik-ExtraBold-88 tracking-wider md:text-[105px]'>
              BURS
            </h3>
          </div>
        </div>
      </div>

      <div id='invertir'>
        <div className="flex flex-col mb-10 space-y-32 md:px-7 md:items-center md:space-y-20 lg:space-y-32 lg:px-36">
          <h1 className="rubik-Bold-36 text-dark-blue-900 md:text-[56px]  text-center">¿Cómo empezar a invertir?</h1>
          <div className="flex flex-col justify-center space-y-20 px-4 sm:px-0 lg:px-5 sm:flex-row sm:space-y-0 md:space-x-20">
            <div className={cardContainer}>
              <div className={backgroundIconClass}>
                <img src={relacionIcon} alt="Icon" className={sizeIcon} />
              </div>
              <h2 className={subtitleCardClass}>Relación</h2>
              <p className={textCardClass}>Proporciona financiamiento a otros, y a cambio, obtendrás ganancias a través de los intereses. Es una forma efectiva de hacer que tu dinero trabaje para ti, generando ingresos adicionales.</p>
            </div>
            <div className={cardContainer}>
              <div className={backgroundIconClass}>
                <img src={inversionesIcon} alt="Icon" className={sizeIcon} />
              </div>
              <h2 className={subtitleCardClass}>Inversiones burs ai</h2>
              <p className={textCardClass}>Entendemos tus necesidades y te acompañamos en el camino para alcanzar tus objetivos de inversión. <br /><br />
                <ul>
                  <li>· Amplia variedad de fondos de inversión.</li>
                  <li>· Productos que complementan tus objetivos.</li>
                  <li>· Un equipo de asesores especializados.</li>
                </ul>
              </p>
            </div>
            <div className={cardContainer}>
              <div className={backgroundIconClass}>
                <img src={diversificacionIcon} alt="Icon" className={sizeIcon} />
              </div>
              <h2 className={subtitleCardClass}>Diversificación</h2>
              <p className={textCardClass}>
                La diversificación en mercados financieros, financiamiento en línea y mercado inmobiliario implica invertir en diferentes activos dentro de estos sectores para reducir el riesgo y aprovechar oportunidades de crecimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*<Simulador />*/}
      <div id='retorno'>
        <div className='flex flex-col lg:flex-row justify-center items-center md:px-5 mb-12 bg-gradient-to-r from-[#FF58DB] via-[#A92FFF]/60.52 to-[#8218DB]'>
          <div id='simulador' className='w-full px-4 lg:w-1/2 flex flex-col  py-14 space-y-4'>
            <h2 className='rubik-Medium-18 text-persian-rose-50 md:text-2xl'>Te damos transparencia y <span className='text-dark-blue-300'>claridad</span></h2>
            <h3 className='rubik-Medium-12 text-purple-heart-50 md:text-lg'>Tasa de Rendimiento Anual Fija <span className='text-persian-rose-200'>15%</span></h3>
            <h4 className='rubik-Medium-12 text-persian-rose-100 md:text-lg'>La Ganancia Anual Total (GAT)</h4>
            <div>
              <h5 className='rubik-Medium-12 text-persian-rose-50 md:text-lg'>GAT Nominal <span className='text-dark-blue-300'>16.18%</span>  sin IVA</h5>
              <h5 className='rubik-Regular-9 text-dark-blue-50 md:text-xs'>La GAT Nominal es el porcentaje de rendimiento antes de impuestos</h5>
            </div>
            <div>
              <h5 className='rubik-Medium-12 text-purple-heart-50 md:text-lg'>GAT Real <span className='text-dark-blue-300'>11.57%</span></h5>
              <h5 className='rubik-Regular-9 text-dark-blue-50 md:text-xs'>La GAT Real es el rendimiento que obtendría después de descontar la inflación estimada</h5>
            </div>
            <p className='rubik-Regular-8 text-dark-blue-100 md:text-[11px]'>
              Valores calculados el 30 de Octubre de 2023. Monto mínimo de ahorro $0.01 Vigencia al 15 de abril de 2024. Producto garantizado por el Fondo de Protección hasta por 25,000 UDIs.
              <br />
              El rendimiento diario únicamente se genera sobre el saldo en cualquier "Cajita" que tengas activada. Consulta Términos y Condiciones.
            </p>
          </div>

          <div id='image' className='w-full md:w-1/2 hidden lg:block'>
            <img src={simuladorpng} alt="Subcontainer 1" className="w-15 h-15" />
          </div>
        </div>
      </div>
      {/*<Form />*/}
    </div>
  )
}

export default QuieroInvertir