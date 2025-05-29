import React, { useContext, useState } from 'react';
import { NetworkContext } from '../../context/NetworkContext';

export default function CityForm() {
  const { dispatch } = useContext(NetworkContext);
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch({ type: 'ADD_CITY', payload: { name: name.trim() } });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de ciudad"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Añadir Ciudad</button>
    </form>
  );
}
