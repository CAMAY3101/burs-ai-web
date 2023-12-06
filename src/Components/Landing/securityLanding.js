import React from 'react'

import secuirtyimage from '../../Assets/Landing/seguridad.webp'

function securityLandings() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row mb-12">
    
      <div className="w-full md:w-5/12 flex justify-center items-center">
        <img className="lg:w-full" src={secuirtyimage} alt="Random Image" />
      </div>
      <div className="w-full md:w-7/12 lg:w-1/2 flex justify-center items-center">
        <div className="w-3/4 md:w-full lg:w-3/4 space-y-8">
          <h3>
            <span className='text-dark-blue-800 rubik-Bold-23 md:text-3xl lg:text-[45px] lg:mb-5'>Burs ai tu espacio seguro <br /></span>
            <span className='text-purple-heart-400 rubik-Bold-18 md:text-2xl lg:text-4xl '> Confiamos en ti </span> 
            <span className='text-purple-heart-900 rubik-Bold-18 md:text-2xl lg:text-4xl'>y </span>
            <span className='text-purple-heart-600 rubik-Bold-18 md:text-2xl lg:text-4xl'>tú </span> 
            <span className='text-purple-heart-900 rubik-Bold-18 md:text-2xl lg:text-4xl'>puedes  <br /></span>
            <span className='text-dark-blue-900 rubik-Bold-15 md:text-2xl lg:text-4xl'>confiar en nosotros.</span>
          </h3>
          <p className="text-dark-blue-900 rubik-Regular-15 md:text-xl lg:text-3xl"> Jamás tendremos practicas de cobranza abusivas ni buscaremos a tus contactos ni referidos</p>
        </div>
      </div>
    </div>
  )
}
export default securityLandings