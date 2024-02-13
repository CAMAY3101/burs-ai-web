import React from 'react'

import mapIcon from '../Assets/icons/map.png'
import phoneIcon from '../Assets/icons/phone.png'
import emailIcon from '../Assets/icons/email.png'

function Cards() {
  return (
      <div id="cards" className="flex flex-col md:flex-row justify-center ">
          <div className="w-full md:w-1/3 p-4 md:p-2 lg:p-4 space-x-2 flex items-center bg-dark-blue-500">
              <div className='w-1/4 md:w-fit lg:w-1/4'>
                  <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#b9a3ff]/20 md:w-15 md:h-15 lg:w-20 lg:h-20">
                      <img src={mapIcon} alt="Subcontainer 1" className="w-15 h-15 md:w-10 md:h-10 lg:w-15 lg:h-15" />
                  </div>
              </div>

              <div className=''>
                  <p className="rubik-Regular-15 text-white/50 md:text-[12px] lg:text-[15px] mb-1">Dirección</p>
                  <p className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]">Av. Empresarios 135. Colonia puerta de hierro 45116 Zapopan, Jalisco</p>
              </div>
          </div>

          <div className="w-full md:w-1/3 p-4 md:p-2 lg:p-4 space-x-2 flex items-center bg-dark-blue-600">
              <div className='w-1/4 md:w-fit lg:w-1/4'>
                  <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#b9a3ff]/20 md:w-15 md:h-15 lg:w-20 lg:h-20">
                      <img src={phoneIcon} alt="Subcontainer 1" className="w-15 h-15 md:w-12 md:h-12 lg:w-15 lg:h-15" />
                  </div>
              </div>

              <div>
                  <p className="rubik-Regular-15 text-white/50 md:text-[12px] lg:text-[15px] mb-1">Numero de atención 24/7</p>
                  <a className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]" href='tel:+523334587498'>33 3458 7498</a>
              </div>
          </div>

          <div className="w-full md:w-1/3 p-4 md:p-2 lg:p-4 space-x-2 flex items-center bg-dark-blue-800">
              <div className='w-1/4 md:w-fit lg:w-1/4'>
                  <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#b9a3ff]/20 md:w-15 md:h-15 lg:w-20 lg:h-20">
                      <img src={emailIcon} alt="Subcontainer 1" className="w-15 h-15 md:w-10 md:h-10 lg:w-15 lg:h-15" />
                  </div>
              </div>

              <div>
                  <p className="rubik-Regular-15 text-white/50 md:text-[12px] lg:text-[15px] mb-1">E-Mail de atención 24/7 </p>
                  <a className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]" href='mailto:soporte@burs.com.mx'>soporte@burs.com.mx</a>
              </div>
          </div>
      </div>
  )
}

export default Cards