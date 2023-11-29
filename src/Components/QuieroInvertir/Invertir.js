import React from 'react'

import relacionIcon from "../../Assets/QuieroInvertir/relacion.png"
import inversionesIcon from "../../Assets/QuieroInvertir/inversiones.png"
import diversificacionIcon from "../../Assets/QuieroInvertir/diversificacion.png"

const titleRecompensaClass = "text-4xl font-bold mb-24  text-center title-recompensa rubik-Bold-70"
const cardContainer = "flex flex-col items-center mx-20"

const backgroundIconClass = "w-28 h-28  mb-10 rounded-full flex items-center justify-center bg-icon-recompensa"
const sizeIcon = "w20- h-20"
const subtitleCardClass = "mt-6 text-lg font-medium mb-4 text-center subtitle-card-recompensa rubik-Medium-36"
const textCardClass = "mt-2 text-sm text-center text-card-recompensa rubik-Regular-23"

function Invertir() {
  return (
    <div>
        <div className="w-full flex flex-col items-center bg-cover bg-center px-36 mb-12 ">
            <h1 className={titleRecompensaClass}>El credito que confia en ti</h1>
            <div className="flex flex-row justify-center">
                <div className={cardContainer}>
                    <div className={backgroundIconClass}>
                        <img src={relacionIcon} alt="Icon" className={sizeIcon} />
                    </div>
                    <h2 className={subtitleCardClass}>¡Prestamos al instante!</h2>
                    <p className={textCardClass}>Recibe tu crédito en línea aprobado en menos de 15 minutos. Sin intermediarios ¡todo desde tu celular o computadora!</p>
                </div>
                <div className={cardContainer}>
                    <div className={backgroundIconClass}>
                        <img src={inversionesIcon} alt="Icon" className={sizeIcon} />
                    </div>
                    <h2 className={subtitleCardClass}>Recompensa burs ai</h2>
                    <p className={textCardClass}>Puedes ganar dinero por invertir a otros a usar Burs ai, hasta $100 MXN por cada invitado.</p>
                </div>
                <div className={cardContainer}>
                    <div className={backgroundIconClass}>
                        <img src={diversificacionIcon} alt="Icon" className={sizeIcon} />
                    </div>
                    <h2 className={subtitleCardClass}>Recompensa burs ai</h2>
                    <p className={textCardClass}>
                        Puedes ganar dinero por invertir a otros a usar Burs ai, hasta $100 MXN por cada invitado.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invertir