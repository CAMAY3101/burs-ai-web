import React from 'react'
import '../Styles/Landing.scss'

import WinIcon from '../Assets/win.png'
import TimeIcon from '../Assets/time.png'

function recompensaLanding() {
  return (
    <div>
        <div className="flex flex-col items-center h-screen bg-cover bg-center Recompensa">
            <h1 className="text-4xl font-bold mb-16  text-center">El credito que confia en ti</h1>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center mx-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <img src={WinIcon} alt="Icon" className="w-8 h-8" />
                    </div>
                    <h2 className="mt-6 text-lg font-medium text-center">¡Prestamos al instante!</h2>
                      <p className="mt-2 text-sm text-center">Recibe tu crédito en línea aprobado en menos de 15 minutos. Sin intermediarios ¡todo desde tu celular o computadora!</p>
                </div>
                <div className="flex flex-col items-center mx-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <img src={TimeIcon} alt="Icon" className="w-8 h-8" />
                    </div>
                    <h2 className="mt-6 text-lg font-medium text-center">Recompensa burs ai</h2>
                      <p className="mt-2 text-sm text-center">Puedes ganar dinero por invertir a otros a usar Burs ai, hasta $100 MXN por cada invitado.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default recompensaLanding