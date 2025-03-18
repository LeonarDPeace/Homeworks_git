import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const Dashboard = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};