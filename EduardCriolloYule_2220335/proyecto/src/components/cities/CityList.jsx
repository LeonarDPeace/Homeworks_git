import React, { useContext } from 'react';
import { NetworkContext } from '../../context/NetworkContext';

export default function CityList({ onSelect }) {
  const { state, dispatch } = useContext(NetworkContext);
  const { cities } = state;

  return (
    <ul className="city-list">
      {cities.map(city => (
        <li key={city.id} className="city-item">
          <span onClick={() => onSelect(city.id)} className="city-name">
            {city.name}
          </span>
          <button
            onClick={() => dispatch({ type: 'REMOVE_CITY', payload: { id: city.id } })}
            className="btn-delete-city"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}