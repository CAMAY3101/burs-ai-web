import { createBrowserRouter } from 'react-router-dom';
import {
    SIGNUP,
    PRESTAMO, PRESTAMO_SOLICITUD, PRESTAMO_VERIFICACION,
    RECOVERPASSWORD,
    ADMIN_USUARIOS
} from "../../Config/Router/paths";

import PublicRoute from "../../Components/Routers/PublicRoute";
import SolicitarPrestamoRoute from '../../Components/Routers/SolicitarPrestamoRoute';
import AdminRoute from '../../Components/Routers/AdminRoute';

import Login2 from "../../Pages/Login2";
import SignUp from '../../Pages/CreateAccount';
import RecoverPassword from "../../Pages/NewPassword";

import Solicitar from '../../Pages/SolicitarPrestamo/Solicitar';
import Verificacion from '../../Pages/SolicitarPrestamo/Verificacion';

import Usuarios from '../../Pages/Admin/Usuarios';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <Login2/>
            },
            {
                path: SIGNUP,
                element: <SignUp />
            },
            {
                path: RECOVERPASSWORD,
                element: <RecoverPassword />
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
    {
        path: ADMIN_USUARIOS,
        element: <AdminRoute />,
        children: [
            {
                index: true,
                element: <Usuarios />
            }
        ]
    }
]);
