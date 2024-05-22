import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/authContext';
import { LOGIN} from '../../Config/Router/paths';

import React from 'react'

export default function SolicitarPrestamoRoute() {
    const { tokenExist,} = useAuthContext();
    console.log('Solicitar Prestamo route');

    if (!tokenExist) {
        return <Navigate to={LOGIN} />;
    }


    return <Outlet />;
}