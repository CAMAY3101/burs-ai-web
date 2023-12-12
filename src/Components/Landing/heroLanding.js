import React from 'react'
import cash from '../../Assets/Landing/cash.png'
import inspection from '../../Assets/Landing/inspection.png'
import smilingFace from '../../Assets/Landing/smiling-face.png'

import '../../Styles/Landing.scss'

const sizeIcon = "w-14 h-14 iconHero"
const backgroundIconClass = "rounded-full w-20 h-20 flex items-center justify-center mb-4 bg-persian-rose-50/50"
const subtitleIconClass = "text-center text-persian-rose-100 rubik-Medium-23"
const textIconClass = "text-center text-persian-rose-100 rubik-Medium-18"

const heroLanding = () => {
  return (
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
      
  )
}

export default heroLanding