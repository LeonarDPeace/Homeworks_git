import React, { useState, useContext, useEffect } from 'react';
import { NetworkContext } from '../../context/NetworkContext';

const flattenNodes = (node, depth = 0) => {
  let list = [{ id: node.id, name: `${'—'.repeat(depth)} ${node.name}` }];
  node.children.forEach(child => {
    list = list.concat(flattenNodes(child, depth + 1));
  });
  return list;
};

export default function ZoneForm({ selectedCityId }) {
  const { state, dispatch } = useContext(NetworkContext);
  const city = state.cities.find(c => c.id === selectedCityId);

  const [mode, setMode] = useState('add');
  const [parentId, setParentId] = useState('');
  const [zoneName, setZoneName] = useState('');
  const [zoneId, setZoneId] = useState('');

  useEffect(() => {
    setParentId(''); setZoneName(''); setZoneId('');
  }, [selectedCityId, mode]);

  if (!city) return <p>Selecciona una ciudad para editar zonas.</p>;

  const nodeList = flattenNodes(city.zones);

  const handleSubmit = e => {
    e.preventDefault();
    if (mode === 'add') {
      if (!parentId || !zoneName.trim()) return;
      dispatch({
        type: 'ADD_ZONE',
        payload: { cityId: selectedCityId, parentId, name: zoneName.trim() }
      });
    } else if (mode === 'edit') {
      if (!zoneId || !zoneName.trim()) return;
      dispatch({
        type: 'EDIT_ZONE',
        payload: { cityId: selectedCityId, zoneId, name: zoneName.trim() }
      });
    }
    setZoneName('');
  };

  return (
    <form onSubmit={handleSubmit} className="zone-form">
      <div>
        <label>
          <input
            type="radio"
            value="add"
            checked={mode === 'add'}
            onChange={() => setMode('add')}
          /> Añadir Zona
        </label>
        <label style={{ marginLeft: '1rem' }}>
          <input
            type="radio"
            value="edit"
            checked={mode === 'edit'}
            onChange={() => setMode('edit')}
          /> Editar Zona
        </label>
      </div>

      {mode === 'add' && (
        <>
          <select
            value={parentId}
            onChange={e => setParentId(e.target.value)}
          >
            <option value="">-- Selecciona zona padre --</option>
            {nodeList.map(n => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
        </>
      )}

      {mode === 'edit' && (
        <>
          <select
            value={zoneId}
            onChange={e => setZoneId(e.target.value)}
          >
            <option value="">-- Selecciona zona a editar --</option>
            {nodeList.map(n => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
        </>
      )}

      <input
        type="text"
        value={zoneName}
        placeholder={mode === 'add' ? 'Nombre de la nueva zona' : 'Nuevo nombre de la zona'}
        onChange={e => setZoneName(e.target.value)}
      />
      <button type="submit" className="btn-zone">
        {mode === 'add' ? 'Agregar Zona' : 'Guardar Cambios'}
      </button>
    </form>
  );
}
