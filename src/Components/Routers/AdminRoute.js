import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/authContext';
import { LOGIN } from '../../Config/Router/paths';

export default function AdminRoute() {
    const { tokenExist,
        //user
     } = useAuthContext(); // Suponiendo que `user` contiene el rol del usuario

    // Verifica si el usuario está autenticado y es administrador
    if (!tokenExist ) {
        // if (!tokenExist || user?.role !== 'admin') {
        return <Navigate to={LOGIN} />; // Redirige al inicio de sesión si no es administrador
    }

    // Si el usuario es administrador, permite el acceso a la ruta
    return <Outlet />;
}
