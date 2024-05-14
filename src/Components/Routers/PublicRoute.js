import { Navigate, Outlet} from 'react-router-dom';
import { INGRESAR_DATOS, VERIFICAR_CORREO, VERIFICAR_TELEFONO, TU_HISTORIAL, QUIERO_INVERTIR } from '../../Config/Router/paths';
import { useAuthContext } from '../../Contexts/authContext';
import IngresarDatos from '../../Pages/CreateAccount/IngresaTusDatos';
import VerificarCorreo from '../../Pages/CreateAccount/VerificacionCorreo';
import VerificarTelefono from '../../Pages/CreateAccount/VerificacionTelefono';
import TuHistorial from '../../Pages/SolicitarPrestamo/TuHistorial';

export default function PublicRoute() {
    const { tokenExist, verificationStep } = useAuthContext();

    // if user is trying to access  to QUIERO_INVERTIR or / path let him in even if he is not authenticated
    if (window.location.pathname === QUIERO_INVERTIR || window.location.pathname === '/') {
        return <Outlet />;
    }
    if (tokenExist) {
        switch (verificationStep) {
            case 1:
                return (
                    <div className='publicRoute case 1'>
                        <Navigate to={INGRESAR_DATOS} />
                        <IngresarDatos />
                    </div>
                );
            case 2:
                return (
                    <div className='publicRoute case 2'>
                        <Navigate to={VERIFICAR_CORREO} />
                        <VerificarCorreo />
                    </div>
                );
            case 3:
                return (
                    <div className='publicRoute case 3'>
                        <Navigate to={VERIFICAR_TELEFONO} />
                        <VerificarTelefono />
                    </div>
                );
            case 4:
                return (
                    <div className='publicRoute case 4'>
                        <Navigate to={TU_HISTORIAL} />
                        <TuHistorial />
                    </div>
                );
            default:
                console.log('Verification Route default');
                return null;
        }
    }

    return <Outlet />;
}