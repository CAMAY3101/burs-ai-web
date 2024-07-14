import React from 'react'
import NavbarLoan from '../../Components/SolicitarPrestamo/NavbarLoan'

import IngresaTusDatos from '../../Components/SolicitarPrestamo/IngresaTusDatos';
import TuHistorial from '../../Components/SolicitarPrestamo/TuHistorial';
import IngresaTuDomicilio from '../../Components/SolicitarPrestamo/IngresaTuDomicilio';
import SeleccionMonto from '../../Components/SolicitarPrestamo/SeleccionMonto';

import { useAuthContext } from '../../Contexts/authContext'

function Solicitar() {
    const { verificationStep } = useAuthContext();
    return (
        <div>
            <NavbarLoan />
            <div className='flex flex-col items-center'>
                <div className='md:w-1/2 lg:w-10/12 flex flex-col items-center space-y-14'>
                    <ol id='progress bar' className="flex items-center space-x-10">
                        <li className="flex items-center text-dark-blue-700 font-rubik font-medium text-xs sm:text-sm">
                            <span className="flex items-center justify-center w-9 h-9 me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base border-dark-blue-700 rounded-full border-1">
                                1
                            </span>
                            Solicitud <span className="hidden lg:inline-flex lg:ms-2">de Prestamo</span>
                            <svg className="w-4 h-4 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className="flex items-center text-dark-blue-200 font-rubik font-regular text-xs sm:text-sm">
                            <span className="flex items-center justify-center w-9 h-9 me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base text-dark-blue-950/30 border-dark-blue-950/50 bg-dark-blue-100 rounded-full border-1">
                                2
                            </span>
                            Verificacion <span className="hidden lg:inline-flex lg:ms-2">de Datos</span>
                            <svg className="w-4 h-4 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className="flex items-center text-dark-blue-200 font-rubik font-regular text-xs sm:text-sm">
                            <span className="flex items-center justify-center w-9 h-9 me-3 font-rubik font-medium text-xs sm:text-sm lg:text-base text-dark-blue-950/30 border-dark-blue-950/50 bg-dark-blue-100 rounded-full border-1">
                                3
                            </span>
                            Solicitar <span className="hidden lg:inline-flex lg:ms-2">Prestamo</span>
                        </li>
                    </ol>
                    {verificationStep === 1 && <IngresaTusDatos />}
                    {verificationStep === 2 && <TuHistorial />}
                    {verificationStep === 3 && <IngresaTuDomicilio />}
                    {verificationStep === 4 && <SeleccionMonto />}
                </div>
            </div>
            
        </div>
    )
}

export default Solicitar