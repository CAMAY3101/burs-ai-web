import { createBrowserRouter } from 'react-router-dom';
import {SIGNUP,
    PRESTAMO, PRESTAMO_SOLICITUD, PRESTAMO_VERIFICACION
} from "../../Config/Router/paths";

import PublicRoute from "../../Components/Routers/PublicRoute";
import SolicitarPrestamoRoute from '../../Components/Routers/SolicitarPrestamoRoute';

import Login from "../../Pages/Login";
import SignUp from '../../Pages/CreateAccount';

import Solicitar from '../../Pages/SolicitarPrestamo/Solicitar';
import Verificacion from '../../Pages/SolicitarPrestamo/Verificacion';

export const router = createBrowserRouter([  
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: SIGNUP,
                element: <SignUp />
            }
        ]
    },
    {
        path: PRESTAMO,
        element: <SolicitarPrestamoRoute />,
        children: [
            {
                path: PRESTAMO_SOLICITUD,
                element: <Solicitar />
            },
            {
                path: PRESTAMO_VERIFICACION,
                element: <Verificacion />
            }
        ]
    },
]);