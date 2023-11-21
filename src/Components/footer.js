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
        <div className="flex flex-col md:flex-row  Footer">
            <div className="w-full md:w-4/12 p-4 bg-gray-200 flex">
                <div>
                      <p className="text-gray-600">Administradora foncre s.a. de c.v. sofom enr</p>
                      <p className="text-gray-600">Bur ai 2023 todos los derechos reservados. </p>
                </div>
            </div>
        
            <div className="w-full md:w-5/12 p-4 bg-gray-300 flex flex-col md:flex-row">
                <div className='w-1/2'>
                    <div className=''>
                        <h2 className="text-lg font-semibold">Prestamos personales</h2>
                        <ul className="">
                            <li>¿Qué es préstamo en linea?</li>
                            <li>¿Prestamos al instante?</li>
                            <li>CAT</li>
                            <li>Prevención de fraudes</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className="text-lg font-semibold">Gana más con burs ai</h2>
                        <ul className="">
                            <li> Recompensa burs ai</li>
                            <li>Prestamos</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Servicios</h2>
                    <ul className="">
                        <li> Inicio</li>
                        <li>Preguntas frecuentes</li>
                        <li>Terminos y Condiciones</li>
                        <li>Chat</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>

            <div className="w-full md:w-3/12 p-4 bg-gray-400 flex gap-x-10">
                <img className={socialIcons} alt='Facebook' src={facebookIcon}/>
                <img className={socialIcons} alt='Twitter' src={twitterIcon}/>
                <img className={socialIcons} alt='Instagram' src={instagramIcon}/>
            </div>
        </div>

        <div className="bg-gray-500 flex flex-wrap p-10">
            <div className="w-full "> 
                <p className="text-gray-300 mb-10">
                    Recuerda cumplir los siguientes requisitos: ser mayor de edad, ser de nacionalidad mexicana, domicilio en territorio nacional y credencial para votar original vigente.
                </p>
                <p className="text-gray-300 mb-10">
                    Desde $500 m.n. hasta $10,000 m.n. Periodo mínimo y máximo de repago podrá ser de 99 hasta 180 días en 1 o 12 cuotas a elección de la solicitud del cliente y al producto de crédito aprobado. APR (Tasa de interés anual) mínima 0% y máxima de 450%. 
                    Un ejemplo representativo del costo total del Préstamo Personal considerando la tasa de interés diaria sería el siguiente: Por $1,000 pagarías $1,237.50 incluyendo IVA de los intereses (Cálculo realizado con una tasa de interés diaria del 1.25%, 
                    y un plazo de 99 días CAT del 69.05%). Bursa i únicamente realiza operaciones en México.
                </p>
                
                <div className="w-full flex flex-col md:flex-row">
                    <div className='w-2/3'>
                        <p>
                            El Buró de Entidades Financieras contiene información de administradora foncre S.A. de C.V., SOFOM, E.N.R. 
                            sobre nuestro desempeño frente a los usuarios, por la prestación de productos y servicios. 
                        </p>
                        <p>
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