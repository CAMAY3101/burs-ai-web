import React from 'react'
import InfoFooter from './infoFooter'
import "../Styles/Landing.scss"

function footer() {
  return (
    <div>
        <InfoFooter />
        <div className="flex flex-col md:flex-row  Footer">
            <div className="w-full md:w-4/12 p-4 bg-gray-200 flex">
                <div>
                    <h2 className="text-lg font-semibold">Dirección</h2>
                    <p className="text-gray-600">Av. de las Américas 1545 piso 20, Providencia, 44630 Guadalajara, Jal.</p>
                </div>
            </div>
        
              <div className="w-full md:w-5/12 p-4 bg-gray-300 flex flex-col md:flex-row">
                <div className='w-1/2'>
                    <div className=''>
                        <h2 className="text-lg font-semibold">Prestamos personales</h2>
                        <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                    </div>
                      <div className='w-1/2'>
                        <h2 className="text-lg font-semibold">Gana más</h2>
                        <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Servicios</h2>
                    <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                </div>
            </div>

            <div className="w-full md:w-3/12 p-4 bg-gray-400 flex">
                <div>
                    <h2 className="text-lg font-semibold">E-Mail de atención 24/7 </h2>
                    <p className="text-gray-600">soporte@aiburs.com</p>
                </div>
            </div>
        </div>

        <div className="bg-gray-500 flex flex-wrap p-10">
            <div className="  w-full lg:w-1/2 ">
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, velit.</p>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, velit.</p>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, velit.</p>
            </div>
        </div>
    </div>
  )
}

export default footer