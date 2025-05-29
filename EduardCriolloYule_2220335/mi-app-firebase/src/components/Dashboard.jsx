import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase/config';
import { clearUser } from '../store/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(clearUser());
    } catch (error) {
      console.error('Error en logout:', error);
    }
  };

  return (
    <div>
      <h1>Bienvenido, {user?.email}</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;