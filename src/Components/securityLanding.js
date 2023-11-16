import React from 'react'

import secuirtyimage from '../Assets/seguridad.png'

function securityLandings() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="w-3/4" src={secuirtyimage} alt="Random Image" />
      </div>
      <div className="w-full md:w-1/2 md:ml-4">
        <div className="text-2xl font-bold mb-4">
          <span>Burs ai tu espacio seguro</span>
          <span> Confiamos en ti </span> <span>y </span><span>tú</span> <span>puedes </span>
          <span>confiar en nosotros.</span>
        </div>
        <p className="text-gray-700"> Jamás tendremos practicas de cobranza abusivas ni buscaremos a tus contactos ni referidos</p>
      </div>
    </div>
  )
}
export default securityLandings