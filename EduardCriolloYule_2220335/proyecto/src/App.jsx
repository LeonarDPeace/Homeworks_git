import React, { useState } from 'react';
import { NetworkProvider } from './context/NetworkContext';
import CityForm from './components/cities/CityForm';
import CityList from './components/cities/CityList';
import CityMetrics from './components/cities/CityMetrics';
import ZoneTree from './components/zones/ZoneTree';
import ZoneForm from './components/zones/ZoneForm';
import ConnectCitiesForm from './components/network/ConnectCitiesForm';
import NetworkGraph from './components/network/NetworkGraph';
import './App.css';

function App() {
  const [selectedCityId, setSelectedCityId] = useState(null);

  return (
    <NetworkProvider>
      <div className="app-container">
        <aside className="sidebar">
          <CityForm />
          <CityList onSelect={setSelectedCityId} />
          {/* Sólo permite conectar si hay al menos 2 ciudades */}
          <ConnectCitiesForm />
        </aside>

        <main className="main-content">
          {selectedCityId ? (
            <>
              <button onClick={() => setSelectedCityId(null)}>
                ← Volver
              </button>
              <CityMetrics selectedCityId={selectedCityId} />
              <ZoneTree selectedCityId={selectedCityId} onNodeClick={() => {}} />
              <ZoneForm selectedCityId={selectedCityId} />
            </>
          ) : (
            <>
              <h2>Vista General de la Red</h2>
              <NetworkGraph />
            </>
          )}
        </main>
      </div>
    </NetworkProvider>
  );
}

export default App;
