import { createBrowserRouter } from 'react-router-dom';
import {
    LOGIN, SIGNUP, QUIERO_INVERTIR,
    PRESTAMO, PRESTAMO_SOLICITUD
} from "../../Config/Router/paths";

import PublicRoute from "../../Components/Routers/PublicRoute";
import SolicitarPrestamoRoute from '../../Components/Routers/SolicitarPrestamoRoute';

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import Landing from "../../Pages/Landing";
import QuieroInvertir from "../../Pages/QuieroInvertir";
import Login from "../../Pages/Login";
import SignUp from '../../Pages/CreateAccount';

import Solicitar from '../../Pages/SolicitarPrestamo/Solicitar';

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
        path: PRESTAMO,
        element: <SolicitarPrestamoRoute />,
        children: [
            {
                path: PRESTAMO_SOLICITUD,
                element: <Solicitar />
            }
        ]
    },
]);