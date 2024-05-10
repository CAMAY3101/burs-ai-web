import { createBrowserRouter } from 'react-router-dom';
import {
    LOGIN, SIGNUP, QUIERO_INVERTIR,
    INGRESAR_DATOS, VERIFICAR_CORREO,
    VERIFICAR_TELEFONO, VERIFICAR,
    SOLICITAR_PRESTAMO, TU_HISTORIAL
} from "../../Config/Router/paths";

import PublicRoute from "../../Components/Routers/PublicRoute";
import VerificationRoute from '../../Components/Routers/VerificationRoute';
import SolicitarPrestamoRoute from '../../Components/Routers/SolicitarPrestamoRoute';

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import Landing from "../../Pages/Landing";
import QuieroInvertir from "../../Pages/QuieroInvertir";
import Login from "../../Pages/LogIn";
import SignUp from '../../Pages/CreateAccount';

import IngresarDatos from '../../Pages/CreateAccount/IngresaTusDatos';
import VerificarCorreo from '../../Pages/CreateAccount/VerificacionCorreo';
import VerificarTelefono from '../../Pages/CreateAccount/VerificacionTelefono';

import TuHistorial from '../../Pages/SolicitarPrestamo/TuHistorial';

export const router = createBrowserRouter([  
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: (
                    <div>
                        <Navbar />
                        <Landing />
                        <Footer />
                    </div>
                )
            },
            {
                path: QUIERO_INVERTIR,
                element: (
                    <div>
                        <Navbar />
                        <QuieroInvertir />
                        <Footer />
                    </div>
                )
            },
            {
                path: LOGIN,
                element: <Login />
            },
            {
                path: SIGNUP,
                element: <SignUp />
            }
        ]
    },
    {
        path: VERIFICAR,
        element: <VerificationRoute />,
        children: [
            {
                path: INGRESAR_DATOS,
                element: <IngresarDatos />
            },
            {
                path: VERIFICAR_CORREO,
                element: <VerificarCorreo />
            },
            {
                path: VERIFICAR_TELEFONO,
                element: <VerificarTelefono />
            }
        ]

    },
    {
        path: SOLICITAR_PRESTAMO,
        element: <SolicitarPrestamoRoute />,
        children: [
            {
                path: TU_HISTORIAL,
                element: <TuHistorial />
            }
        ]
    },
]);