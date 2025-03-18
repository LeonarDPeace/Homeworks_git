import { useContext } from 'react';
import { UserContext } from './UserContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    return user ? children : <Navigate to="/login" />;
};