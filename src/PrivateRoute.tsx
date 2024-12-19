import { Navigate } from 'react-router-dom';
import { useAuth } from './hook/AuthContext';

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();

    console.log("isAuthenticated", isAuthenticated());

    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return children;
}
