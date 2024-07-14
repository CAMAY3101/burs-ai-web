import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/authContext';
import { LOGIN, INGRESAR_DATOS, VERIFICAR_CORREO, VERIFICAR_TELEFONO, TU_HISTORIAL } from '../../Config/Router/paths';
import IngresarDatos from '../../Pages/CreateAccount/IngresaTusDatos';
import VerificarCorreo from '../../Pages/CreateAccount/VerificacionCorreo';
import VerificarTelefono from '../../Pages/CreateAccount/VerificacionTelefono';
import TuHistorial from '../../Pages/SolicitarPrestamo/TuHistorial';

export default function VerificationRoute() {
    const { tokenExist, checkToken } = useAuthContext();
    checkToken();


    if (!tokenExist) {
        return <Navigate to={LOGIN} />;
    }

    
    return <Outlet />;
}