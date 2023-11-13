import React from 'react'
import cash from '../Assets/cash.png'
import inspection from '../Assets/inspection.png'
import smilingFace from '../Assets/smiling-face.png'
// import {Link} from "@nextui-org/react"
import '../Styles/Landing.scss'
// import { Layout } from '@douyinfe/semi-ui'

const sizeIcon = "w-14 h-14 iconHero"
const backgroundIconClass = "rounded-full w-20 h-20 flex items-center justify-center mb-4 backgroundIconHero"
const subtitleIconClass = "text-center textIconHero rubik-Medium-23"
const textIconClass = "text-center textIconHero rubik-Medium-18"
const TitleHeroClassContainer = "mb-10 text-center" // "mb-4 text-center" || "mb-8 text-center" mb-number choose the margin bottom
const CardsContainer = "grid grid-cols-3 gap-x-4 gap-y-8" //"grid grid-cols-3 gap-6 justify-end sm:flex flex-col sm:items-center"  || "grid grid-cols-3 gap-x-4 gap-y-8"

const heroLanding = () => {
  return (
    // make a hero section with a background image with the text inside of it
    <div>
        <div className="bg-cover bg-center h-screen flex items-center justify-end Portada">
            <div className="flex flex-col md:flex-row justify-end">
                <div className="p-10">
                    <div className= {TitleHeroClassContainer}>
                        <span className="titleHero rubik-Bold-36">
                            Recibe tu préstamo
                        </span>
                        <span className="titleHero rubik-Bold-36">
                            <br />
                        </span>
                        <span className="titleHeroCenter rubik-Bold-45">
                            seguro y en minutos
                        </span>
                        <span className="titleHeroCenter rubik-Bold-45">
                            <br />
                        </span>
                        <span className="titleHero rubik-Bold-36">
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
                            <p className="text-center textIconHero rubik-Medium-23">Disfruta</p>
                            <p className="text-center textIconHero rubik-Medium-18">una vez aprobado el prestamo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
  )
}

export default heroLanding