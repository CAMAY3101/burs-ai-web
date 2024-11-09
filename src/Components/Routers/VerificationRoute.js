import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/authContext';
import { LOGIN } from '../../Config/Router/paths';

export default function VerificationRoute() {
    const { tokenExist, checkToken } = useAuthContext();
    checkToken();

    if (!tokenExist) {
        return <Navigate to={LOGIN} />;
    }
    
    return <Outlet />;
}