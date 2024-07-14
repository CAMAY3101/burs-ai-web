import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/authContext';
import { LOGIN, PRESTAMO_SOLICITUD, PRESTAMO_VERIFICACION} from '../../Config/Router/paths';

import React from 'react'
import Verificacion from '../../Pages/SolicitarPrestamo/Verificacion';
import Solicitar from '../../Pages/SolicitarPrestamo/Solicitar';

export default function SolicitarPrestamoRoute() {
    const { tokenExist, verificationStep } = useAuthContext();
    console.log('Solicitar Prestamo route');

    if (!tokenExist) {
        return <Navigate to={LOGIN} />;
    }

    if (verificationStep >= 5) {
        return (
            <div>
                <Navigate to={PRESTAMO_VERIFICACION} />
                <Verificacion />
            </div>
        )
    }
    if (verificationStep < 5) {
        return (
            <div>
                <Navigate to={PRESTAMO_SOLICITUD} />
                <Solicitar />
            </div>
        )
    }

    return <Outlet />;
}