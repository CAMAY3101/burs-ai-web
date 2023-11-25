import React from 'react'
import '../../Styles/Landing.scss'

import WinIcon from '../../Assets/Landing/win.png'
import TimeIcon from '../../Assets/Landing/time.png'

// Class names

const recompensaContainer = "flex flex-col items-center bg-cover bg-center Recompensa"
const titleRecompensaClass = "text-4xl font-bold mb-24  text-center titleRecompensa rubik-Bold-70"
const CardsContainer = "flex flex-row justify-center"
const cardContainer = "flex flex-col items-center mx-20"

const backgroundIconClass = "w-28 h-28 bg-blue-500 mb-10 rounded-full flex items-center justify-center backgroundIconRecompensa"
const sizeIcon = "w20- h-20"
const subtitleCardClass = "mt-6 text-lg font-medium mb-4 text-center subtitleRecompensaCard rubik-Medium-36"
const textCardClass = "mt-2 text-sm text-center textRecompensaCard rubik-Regular-23"

function recompensaLanding() {
  return (
    <div id='recompensa'>
        <div className={recompensaContainer}>
            <h1 className={titleRecompensaClass}>El credito que confia en ti</h1>
            <div className={CardsContainer}>
                <div className={cardContainer}>
                    <div className={backgroundIconClass}>
                        <img src={TimeIcon} alt="Icon" className={sizeIcon} />
                    </div>
                    <h2 className={subtitleCardClass}>¡Prestamos al instante!</h2>
                      <p className={textCardClass}>Recibe tu crédito en línea aprobado en menos de 15 minutos. Sin intermediarios ¡todo desde tu celular o computadora!</p>
                </div>
                <div className={cardContainer}>
                    <div className={backgroundIconClass}>
                        <img src={WinIcon} alt="Icon" className={sizeIcon} />
                    </div>
                    <h2 className={subtitleCardClass}>Recompensa burs ai</h2>
                      <p className={textCardClass}>Puedes ganar dinero por invertir a otros a usar Burs ai, hasta $100 MXN por cada invitado.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default recompensaLanding