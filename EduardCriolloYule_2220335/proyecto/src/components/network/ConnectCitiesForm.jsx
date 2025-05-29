import React, { useContext, useState } from 'react';
import { NetworkContext } from '../../context/NetworkContext';

export default function ConnectCitiesForm() {
  const { state, dispatch } = useContext(NetworkContext);
  const [pair, setPair] = useState({ source: '', target: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (pair.source && pair.target && pair.source !== pair.target) {
      dispatch({ type: 'ADD_LINK', payload: pair });
      setPair({ source: '', target: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <select
        value={pair.source}
        onChange={e => setPair(p => ({ ...p, source: e.target.value }))}
      >
        <option value="">-- Ciudad A --</option>
        {state.cities.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <span style={{ margin: '0 0.5rem' }}>↔</span>
      <select
        value={pair.target}
        onChange={e => setPair(p => ({ ...p, target: e.target.value }))}
      >
        <option value="">-- Ciudad B --</option>
        {state.cities.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button type="submit">Conectar</button>
    </form>
  );
}
