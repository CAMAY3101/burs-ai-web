import React from 'react'
import cash from '../../Assets/Landing/cash.png'
import inspection from '../../Assets/Landing/inspection.png'
import smilingFace from '../../Assets/Landing/smiling-face.png'

import '../../Styles/Landing.scss'

const sizeIcon = "w-14 h-14 iconHero"
const backgroundIconClass = "rounded-full w-20 h-20 flex items-center justify-center mb-4 bg-icon-hero"
const subtitleIconClass = "text-center text-icon-hero rubik-Medium-23"
const textIconClass = "text-center text-icon-hero rubik-Medium-18"
const TitleHeroClassContainer = "mb-10 text-center" 
const CardsContainer = "grid grid-cols-3 gap-x-4 gap-y-8" 

const heroLanding = () => {
  return (
    <div id='proceso'>
        <div className="bg-cover bg-center h-screen flex items-center justify-end cover-hero">
            <div className="flex flex-col md:flex-row justify-end">
                <div className="p-10">
                    <div className= {TitleHeroClassContainer}>
                        <span className="title-hero rubik-Bold-36">
                            Recibe tu préstamo
                        </span>
                        <span className="title-hero rubik-Bold-36">
                            <br />
                        </span>
                        <span className="title-hero-center rubik-Bold-45">
                            seguro y en minutos
                        </span>
                        <span className="title-hero-center rubik-Bold-45">
                            <br />
                        </span>
                        <span className="title-hero rubik-Bold-36">
                            en solo 3 pasos
                        </span>
                    </div>
                    <div className={CardsContainer}>
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
    </div>
      
  )
}

export default heroLanding