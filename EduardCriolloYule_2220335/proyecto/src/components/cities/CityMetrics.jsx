import React, { useContext } from 'react';
import { NetworkContext } from '../../context/NetworkContext';

const getHeight = node =>
  node.children.length === 0
    ? 1
    : 1 + Math.max(...node.children.map(getHeight));
const countZones = node =>
  1 + node.children.reduce((sum, child) => sum + countZones(child), 0);

export default function CityMetrics({ selectedCityId }) {
  const { state } = useContext(NetworkContext);
  const city = state.cities.find(c => c.id === selectedCityId);
  if (!city) return <p>Selecciona una ciudad para ver métricas.</p>;

  const height = getHeight(city.zones) - 1;
  const total = countZones(city.zones) - 1;

  return (
    <div className="city-metrics">
      <p>Altura máxima: {height}</p>
      <p>Total de zonas: {total}</p>
    </div>
  );
}
