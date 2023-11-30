import React from 'react'
import '../../Styles/QuieroInvertir.scss'

import relacionIcon from "../../Assets/QuieroInvertir/relacion.png"
import inversionesIcon from "../../Assets/QuieroInvertir/inversiones.png"
import diversificacionIcon from "../../Assets/QuieroInvertir/diversificacion.png"

const cardContainer = "w-full md:w-1/3 flex flex-col items-center mx-3"

const backgroundIconClass = "w-28 h-28  mb-10 rounded-full flex items-center justify-center bg-icon-invertir"
const sizeIcon = "w20- h-20"
const subtitleCardClass = "mt-6 text-lg font-medium mb-4 text-center subtitle-card-invertir rubik-Medium-23"
const textCardClass = "mt-2 text-sm text-center text-card-invertir rubik-Regular-16 px-5"

function Invertir() {
  return (
    <div>
        <div className="w-full flex flex-col items-center bg-cover bg-center px-20 mb-12 ">
            <h1 className="text-4xl font-bold mb-24  text-center title-invertir rubik-Bold-56">¿Cómo empezar a invertir?</h1>
            <div className="flex flex-col md:flex-row justify-center">
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
                      <p className={textCardClass}>Entendemos tus necesidades y te acompañamos en el camino para alcanzar tus objetivos de inversión. <br/><br/>
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
  )
}

export default Invertir