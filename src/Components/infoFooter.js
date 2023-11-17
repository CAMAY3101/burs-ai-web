import React from 'react'
import mapIcon from '../Assets/map.png'
import phoneIcon from '../Assets/phone.png'
import emailIcon from '../Assets/email.png'

const InfoFooter = () => {
    // <div className={`flex ${isColumn ? 'flex-col' : 'flex-row'}`}>

    return (
        <div className="flex flex-col md:flex-row justify-center ">
            <div className="w-full md:w-1/3 p-4 bg-gray-200 flex items-center">
                <img src={mapIcon} alt="Subcontainer 1" className="w-20 h-20 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">Dirección</h2>
                    <p className="text-gray-600">Av. de las Américas 1545 piso 20, Providencia, 44630 Guadalajara, Jal.</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-4 bg-gray-300 flex items-center">
                <img src={phoneIcon} alt="Subcontainer 1" className="w-20 h-20 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">Numero de atención 24/7</h2>
                    <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-4 bg-gray-400 flex items-center">
                <img src={emailIcon} alt="Subcontainer 1" className="w-20 h-20 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">E-Mail de atención 24/7 </h2>
                    <p className="text-gray-600">soporte@aiburs.com</p>
                </div>
            </div>
        </div>
    );
}

export default InfoFooter