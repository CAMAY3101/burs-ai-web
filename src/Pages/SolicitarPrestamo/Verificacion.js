import React from 'react'
import NavbarLoan from '../../Components/SolicitarPrestamo/NavbarLoan'


import VerificacionCorreo from '../../Components/SolicitarPrestamo/VerificacionCorreo';
import VerificacionTelefono from '../../Components/SolicitarPrestamo/VerificacionTelefono';
import VerificacionID from '../../Components/SolicitarPrestamo/VerificacionID';
import ResultadosModelos from '../../Components/SolicitarPrestamo/ResultadosModelos';

import { useAuthContext } from '../../Contexts/authContext'

function Verificacion() {
    const { verificationStep } = useAuthContext();

    return (
        <div>
            <NavbarLoan />
            <div className=' flex flex-col items-center '>
                <div className='md:w-1/2 lg:w-10/12 flex flex-col items-center space-y-14 mr-8 ml-8 '>
                    {verificationStep === 4 && <VerificacionTelefono />}
                    {verificationStep === 5 && <VerificacionID />}
                    {verificationStep === 6 && <ResultadosModelos />}
                </div>
            </div>

        </div>
    )
}

export default Verificacion