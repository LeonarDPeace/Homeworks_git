import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Crud from './components/Crud';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Dashboard />
          <Crud />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;