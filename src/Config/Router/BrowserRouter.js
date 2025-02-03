import { createBrowserRouter } from 'react-router-dom';
import {SIGNUP,
    CIRCULO_CREDITO, CIRCULO_CREDITO_TERMINOS_CONDICIONES, CIRCULO_CREDITO_VERIFICAR_DATOS,
    PRESTAMO, PRESTAMO_SOLICITUD, PRESTAMO_VERIFICACION,
    RECOVERPASSWORD
} from "../../Config/Router/paths";

import PublicRoute from "../../Components/Routers/PublicRoute";
import SolicitarPrestamoRoute from '../../Components/Routers/SolicitarPrestamoRoute';
import CirculoCreditoRoute from '../../Components/Routers/CirculoCreditoRoute';

import Login2 from "../../Pages/Login2";
import SignUp from '../../Pages/CreateAccount';
//import RecoverPassword from "../../Pages/RecoverPassword";
import RecoverPassword from "../../Pages/NewPassword";

import Solicitar from '../../Pages/SolicitarPrestamo/Solicitar';
import Verificacion from '../../Pages/SolicitarPrestamo/Verificacion';

import SolicitarCredito from '../../Pages/CirculoCredito/SolicitarCredito';

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
        path: CIRCULO_CREDITO,
        element: <CirculoCreditoRoute />,
        children: [
            {
                path: CIRCULO_CREDITO_TERMINOS_CONDICIONES,
                element: <SolicitarCredito terminos={true} />,
            },
            {
                path: CIRCULO_CREDITO_VERIFICAR_DATOS,
                element: <SolicitarCredito terminos={false} />,
            }
        ]
    }
]);
