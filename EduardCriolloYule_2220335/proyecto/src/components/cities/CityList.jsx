import React, { useContext } from 'react';
import { NetworkContext } from '../../context/NetworkContext';
import './CityList.css';

export default function CityList({ onSelect }) {
  const { state, dispatch } = useContext(NetworkContext);

  return (
    <div>
      <h2>Ciudades</h2>
      {state.cities.map(city => (
        <div key={city.id} className="city-item">
          {/* Botón para seleccionar la ciudad */}
          <button
            className="city-button"
            onClick={() => onSelect(city.id)}
          >
            {city.name}
          </button>

          {/* Botón para borrar la ciudad */}
          <button
            className="delete-button"
            onClick={() =>
              dispatch({ type: 'REMOVE_CITY', payload: { id: city.id } })
            }
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
