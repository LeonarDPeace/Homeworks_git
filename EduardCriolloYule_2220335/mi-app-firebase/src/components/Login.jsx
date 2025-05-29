import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, googleProvider } from '../firebase/config';
import { setUser } from '../store/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error('Error en login:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await auth.signInWithPopup(googleProvider);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error('Error en login con Google:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button onClick={handleLogin}>Iniciar Sesión</button>
        <button onClick={handleGoogleLogin}>Iniciar con Google</button>
      </div>
    </div>
  );
};

export default Login;