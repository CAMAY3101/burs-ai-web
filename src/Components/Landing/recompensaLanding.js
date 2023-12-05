import React from 'react'
import '../../Styles/Landing.scss'

import WinIcon from '../../Assets/Landing/win.png'
import TimeIcon from '../../Assets/Landing/time.png'

// Class names

const backgroundIconClass = "bg-dark-blue-100 rounded-full flex items-center justify-center w-28 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28"
const sizeIcon = "w20- h-20 md:w-16 md:h-16 lg:w-20 lg:h-20"

const subtitleCardClass = "rubik-Medium-32 text-purple-heart-900 text-center md:text-[28px] lg:text-4xl"
const textCardClass = "rubik-Regular-23 text-purple-heart-500 text-center md:text-lg lg:text-2xl"

function recompensaLanding() {
  return (
    <div id='recompensa'>
      <div className="flex flex-col mb-10 space-y-32 md:px-7 md:items-center md:space-y-20 lg:space-y-32 lg:px-36">
        <h1 className="rubik-Bold-56 text-center sm:text-4xl lg:text-7xl title-recompensa">El credito que confia en ti</h1>
        <div className="flex flex-col justify-center space-y-20 sm:flex-row sm:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center space-y-11">
              <div className={backgroundIconClass}>
                  <img src={TimeIcon} alt="Icon" className={sizeIcon} />
              </div>
              <div className='space-y-7'>
                <h2 className={subtitleCardClass}>¡Prestamos al instante!</h2>
                <p className={textCardClass}>Recibe tu crédito en línea aprobado en menos de 15 minutos. Sin intermediarios ¡todo desde tu celular o computadora!</p>
              </div>
          </div>
          <div className="flex flex-col items-center space-y-11">
              <div className={backgroundIconClass}>
                  <img src={WinIcon} alt="Icon" className={sizeIcon} />
              </div>
              <div className='space-y-7'>
                <h2 className={subtitleCardClass}>Recompensa burs ai</h2>
                <p className={textCardClass}>Puedes ganar dinero por invertir a otros a usar Burs ai, hasta $100 MXN por cada invitado.</p>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default recompensaLanding