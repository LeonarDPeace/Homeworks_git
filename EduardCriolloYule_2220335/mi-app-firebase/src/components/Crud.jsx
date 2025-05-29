import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdate = async (id, currentName) => {
    const newName = prompt('Nuevo nombre:', currentName);
    if (newName) {
      try {
        await db.collection('users').doc(id).update({ name: newName });
        console.log('Usuario actualizado');
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await db.collection('users').doc(id).delete();
      console.log('Usuario eliminado');
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await db.collection('users').add({ name });
      setName('');
    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleUpdate(user.id, user.name)}>Actualizar</button>
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;