import { Navigate, Outlet} from 'react-router-dom';
import { PRESTAMO_SOLICITUD } from '../../Config/Router/paths';
import { useAuthContext } from '../../Contexts/authContext';
import Solicitar from '../../Pages/SolicitarPrestamo/Solicitar';

export default function PublicRoute() {
    const { tokenExist, verificationStep } = useAuthContext();

    // if user is trying to access  to QUIERO_INVERTIR or / path let him in even if he is not authenticated
    if ( window.location.pathname === '/') {
        return <Outlet />;
    }
    if (tokenExist) {
        if (verificationStep >= 1) {
            return (
                <div>
                    <Navigate to={PRESTAMO_SOLICITUD} />
                    <Solicitar />
                </div>
            )
        }
    }

    return <Outlet />;
}