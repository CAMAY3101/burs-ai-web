import React from 'react'
import InfoFooter from './infoFooter'
import "../Styles/Landing.scss"

import instagramIcon from '../Assets/instagram.png'
import facebookIcon from '../Assets/facebook.png'
import twitterIcon from '../Assets/twitter.png'

const socialIcons = 'w-6 h-6'

function footer() {
  return (
    <div>
        <InfoFooter />


        <div className="flex flex-col md:flex-row pt-10 Footer bg-dark-blue-900">
            <div className="w-full md:w-4/12 pl-10 pt-4 flex">
                <div>
                      <p className="rubik-Medium-15 text-white">Administradora foncre s.a. de c.v. sofom enr</p>
                      <p className="rubik-Medium-15 text-white">Bur ai 2023 todos los derechos reservados. </p>
                </div>
            </div>
        
            <div className="w-full md:w-5/12 p-4 flex flex-col md:flex-row ">
                <div className='w-1/2 grid gap-y-7'>
                    <div className='grid gap-y-2.5'>
                        <div className="rubik-Medium-23 title-footer">Prestamos personales</div>
                        <ul className="grid gap-y-1.5 text-white rubik-Medium-15">
                            <li>¿Qué es préstamo en linea?</li>
                            <li>¿Prestamos al instante?</li>
                            <li>CAT</li>
                            <li>Prevención de fraudes</li>
                        </ul>
                    </div>
                    <div className='grid gap-y-2.5'>
                        <div className="rubik-Medium-23 title-footer">Gana más con burs ai</div>
                        <ul className="grid gap-y-1.5 text-white rubik-Medium-15">
                            <li> Recompensa burs ai</li>
                            <li>Prestamos</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='grid gap-y-2.5'>
                        <div className="rubik-Medium-23 title-footer">Servicios</div>
                        <ul className="grid gap-y-1.5 text-white rubik-Medium-15">
                            <li> Inicio</li>
                            <li>Preguntas frecuentes</li>
                            <li>Terminos y Condiciones</li>
                            <li>Chat</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/12 pt-10 flex gap-x-10">
                <img className={socialIcons} alt='Facebook' src={facebookIcon}/>
                <img className={socialIcons} alt='Twitter' src={twitterIcon}/>
                <img className={socialIcons} alt='Instagram' src={instagramIcon}/>
            </div>
        </div>


        <div className="bg-dark-blue-900 flex flex-wrap p-10">
            <div className="w-full "> 
                <p className="rubik-Medium-15 text-white mb-10">
                    Recuerda cumplir los siguientes requisitos: ser mayor de edad, ser de nacionalidad mexicana, domicilio en territorio nacional y credencial para votar original vigente.
                </p>
                <p className="rubik-Medium-15 text-white mb-10">
                    Desde $500 m.n. hasta $10,000 m.n. Periodo mínimo y máximo de repago podrá ser de 99 hasta 180 días en 1 o 12 cuotas a elección de la solicitud del cliente y al producto de crédito aprobado. APR (Tasa de interés anual) mínima 0% y máxima de 450%. 
                    Un ejemplo representativo del costo total del Préstamo Personal considerando la tasa de interés diaria sería el siguiente: Por $1,000 pagarías $1,237.50 incluyendo IVA de los intereses (Cálculo realizado con una tasa de interés diaria del 1.25%, 
                    y un plazo de 99 días CAT del 69.05%). Bursa i únicamente realiza operaciones en México.
                </p>
                
                <div className="w-full flex flex-col md:flex-row">
                    <div className='w-2/3'>
                        <p className='rubik-Medium-15 text-white'>
                            El Buró de Entidades Financieras contiene información de administradora foncre S.A. de C.V., SOFOM, E.N.R. 
                            sobre nuestro desempeño frente a los usuarios, por la prestación de productos y servicios. 
                        </p>
                        <p className='rubik-Medium-15 text-white '>
                            Te invitamos a consultarlo también en la página http://www.buro.gob.mx 
                        </p>
                    </div>
                    
                    <div className="w-1/3 flex md:flex-row gap-x-10 justify-center">
                        <img src="https://source.unsplash.com/random" alt="Card 2" className="w-25 h-20" />
                        <img src="https://source.unsplash.com/random" alt="Card 2" className="w-25 h-20" />
                        <img src="https://source.unsplash.com/random" alt="Card 2" className="w-25 h-20" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default footer