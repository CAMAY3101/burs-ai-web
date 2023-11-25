import React from 'react'
import mapIcon from '../Assets/icons/map.png'
import phoneIcon from '../Assets/icons/phone.png'
import emailIcon from '../Assets/icons/email.png'

const InfoFooter = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center ">

            <div className="w-full md:w-1/3 p-4 gap-x-2 flex items-center bg-dark-blue-500">
                <div className='w-1/4'>
                    <div className="rounded-full w-20 h-20 flex items-center justify-center backgroundIconContact">
                        <img src={mapIcon} alt="Subcontainer 1" className="w-15 h-15" />
                    </div>
                </div>

                <div className=''>
                    <p className="mb-1 rubik-Regular-15 titleContact">Dirección</p>
                    <p className="rubik-Medium-15 text-white">Av. de las Américas 1545 piso 20, Providencia, 44630 Guadalajara, Jal.</p>
                </div>
            </div>
            
            <div className="w-full md:w-1/3 p-4 gap-x-2 flex items-center bg-dark-blue-600">
                <div className='w-1/4'>
                    <div className="rounded-full w-20 h-20 flex items-center justify-center backgroundIconContact">
                        <img src={phoneIcon} alt="Subcontainer 1" className="w-15 h-15" />
                    </div>
                </div>

                <div>
                    <p className="mb-1 rubik-Regular-15 titleContact">Numero de atención 24/7</p>
                    <p className="rubik-Medium-15 text-white">00 000 000</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 p-4 gap-x-2 flex items-center bg-dark-blue-800">
                <div className='w-1/4'>
                    <div className="rounded-full w-20 h-20 flex items-center justify-center backgroundIconContact">
                        <img src={emailIcon} alt="Subcontainer 1" className="w-15 h-15" />
                    </div>
                </div>

                <div>
                    <p className="mb-1 rubik-Regular-15 titleContact">E-Mail de atención 24/7 </p>
                    <p className="rubik-Medium-15 text-white">soporte@aiburs.com</p>
                </div>
            </div>
        </div>
    );
}

export default InfoFooter