import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/authContext';
import { LOGIN, INGRESAR_DATOS, VERIFICAR_CORREO, VERIFICAR_TELEFONO, TU_HISTORIAL } from '../../config/router/paths';
import IngresarDatos from '../../Pages/CreateAccount/IngresaTusDatos';
import VerificarCorreo from '../../Pages/CreateAccount/VerificacionCorreo';
import VerificarTelefono from '../../Pages/CreateAccount/VerificacionTelefono';
import TuHistorial from '../../Pages/SolicitarPrestamo/TuHistorial';

export default function VerificationRoute() {
    const { tokenExist, checkToken, verificationStep, } = useAuthContext();
    checkToken();
    console.log('Verification route');


    if (!tokenExist) {
        return <Navigate to={LOGIN} />;
    }

    if (tokenExist) {
        switch (verificationStep) {
            case 1:
                return (
                    <div>
                        <Navigate to={INGRESAR_DATOS} />
                        <IngresarDatos />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Navigate to={VERIFICAR_CORREO} />
                        <VerificarCorreo />
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Navigate to={VERIFICAR_TELEFONO} />
                        <VerificarTelefono />
                    </div>
                );
            case 4:
                return (
                    <div>
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