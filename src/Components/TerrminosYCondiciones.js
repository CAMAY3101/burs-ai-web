import React from 'react'

import instagramIcon from '../Assets/icons/instagram.png'
import facebookIcon from '../Assets/icons/facebook.png'
import twitterIcon from '../Assets/icons/twitter.png'

import condusefIcon from '../Assets/icons/condusef.png'
import cnbvIcon from '../Assets/icons/cnbv.png'
import shcpIcon from '../Assets/icons/shcp.png'

const socialIcons = 'w-6 h-6'

function TerrminosYCondiciones() {
  return (
      <div id='terminos y condiciones' className='bg-dark-blue-900 p-4 flex flex-col space-y-5 md:px-2 lg:px-4'>
          <div id='directorio' className="flex flex-col md:flex-row md:space-x-2 lg:space-x-0">
              <div className="w-full md:w-1/3 space-y-5">
                  <div className='space-y-2'>
                      <p className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]">Administradora foncre s.a. de c.v. sofom enr</p>
                      <p className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]">Bur ai 2023 todos los derechos reservados. </p>
                  </div>
                  <div className="flex space-x-12">
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-icon-social-media">
                          <img className={socialIcons} alt='Facebook' src={facebookIcon} />
                      </div>
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-icon-social-media">
                          <img className={socialIcons} alt='Twitter' src={twitterIcon} />
                      </div>
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-icon-social-media">
                          <img className={socialIcons} alt='Instagram' src={instagramIcon} />
                      </div>
                  </div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col md:flex-row md:space-x-7 lg:space-x-12 ">
                  <div className='space-y-2.5'>
                      <div className="text-persian-rose-600 rubik-Medium-23 md:text-lg lg:text-[23px]">Servicios</div>
                      <ul className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px] space-y-1.5 md:space-y-1 lg:space-y-1.5">
                          <li> Inicio</li>
                          <li>Preguntas frecuentes</li>
                          <li>Terminos y Condiciones</li>
                          <li>Chat</li>
                          <li>Blog</li>
                      </ul>
                  </div>
                  <div className='space-y-2.5'>
                      <div className="text-persian-rose-600 rubik-Medium-23 md:text-lg lg:text-[23px]">Prestamos personales</div>
                      <ul className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px] space-y-1.5 md:space-y-1 lg:space-y-1.5">
                          <li>¿Qué es préstamo en linea?</li>
                          <li>¿Prestamos al instante?</li>
                          <li>CAT</li>
                          <li>Prevención de fraudes</li>
                      </ul>
                  </div>
                  <div className='space-y-2.5'>
                      <div className="text-persian-rose-600 rubik-Medium-23 md:text-lg lg:text-[23px]">Gana más con burs ai</div>
                      <ul className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px] space-y-1.5 md:space-y-1 lg:space-y-1.5">
                          <li> Recompensa burs ai</li>
                          <li>Prestamos</li>
                      </ul>
                  </div>

              </div>


          </div>


          <div id='regulaciones' className="flex flex-col space-y-8">
              <p className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]">
                  Recuerda cumplir los siguientes requisitos: ser mayor de edad, ser de nacionalidad mexicana, domicilio en territorio nacional y credencial para votar original vigente.
              </p>
              <p className="rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]">
                  Desde $500 m.n. hasta $10,000 m.n. Periodo mínimo y máximo de repago podrá ser de 99 hasta 180 días en 1 o 12 cuotas a elección de la solicitud del cliente y al producto de crédito aprobado. APR (Tasa de interés anual) mínima 0% y máxima de 450%.
                  Un ejemplo representativo del costo total del Préstamo Personal considerando la tasa de interés diaria sería el siguiente: Por $1,000 pagarías $1,237.50 incluyendo IVA de los intereses (Cálculo realizado con una tasa de interés diaria del 1.25%,
                  y un plazo de 99 días CAT del 69.05%). Bursa i únicamente realiza operaciones en México.
              </p>

              <div className="w-full flex flex-col space-y-4">
                  <div className='space-y-4'>
                      <p className='rubik-Medium-15 text-white md:text-[12px] lg:text-[15px]'>
                          El Buró de Entidades Financieras contiene información de administradora foncre S.A. de C.V., SOFOM, E.N.R.
                          sobre nuestro desempeño frente a los usuarios, por la prestación de productos y servicios.
                      </p>
                      <p className='rubik-Medium-15 text-white md:text-[12px] lg:text-[15px] '>
                          Te invitamos a consultarlo también en la página http://www.buro.gob.mx
                      </p>
                  </div>

                  <div className="flex flex-row space-x-5 md:space-x-8">
                      <img src={cnbvIcon} alt="Card 2" className="w-15 h-10" />
                      <img src={shcpIcon} alt="Card 2" className="w-15 h-10" />
                      <img src={condusefIcon} alt="Card 2" className="w-15 h-10" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default TerrminosYCondiciones