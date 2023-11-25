import React from 'react'

import secuirtyimage from '../Assets/Landing/seguridad.png'

function securityLandings() {
  return (
    <div className="flex flex-col md:flex-row Seguridad">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="w-3/4" src={secuirtyimage} alt="Random Image" />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-3/4">
          <h4 className="mb-4">
            <span className='bursAi'>Burs ai tu espacio seguro <br /></span>
            <span className='confiamosEnTi'> Confiamos en ti </span> <span className='yPuedes'>y </span><span className='tu'>tú</span> <span className='yPuedes'>puedes  <br /></span>
            <span className='confianza'>confiar en nosotros.</span>
          </h4>
          <p className="paragraph"> Jamás tendremos practicas de cobranza abusivas ni buscaremos a tus contactos ni referidos</p>
        </div>
      </div>
    </div>
  )
}
export default securityLandings