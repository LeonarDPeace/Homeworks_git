import { useState, useEffect } from 'react';
import { City } from './models/City';
import { Person } from './models/Person';
import { nodes as initialNodes, links as initialLinks } from './data/graphData';
import GraphView from './components/GraphView';

function App() {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const medellin = new City('Medellín');
    const bogota   = new City('Bogotá');

    const juan     = new Person('Juan', 28, medellin);
    const maria    = new Person('María', 22, bogota);
    const pedro    = new Person('Pedro', 30, medellin);

    setNodes([medellin, bogota, juan, maria, pedro].map(c => ({
      id: c.id,
      name: c.name,
      group: c instanceof City ? 'city' : 'person',
    })));

    setLinks([
      { source: juan.id,   target: medellin.id },
      { source: pedro.id,  target: medellin.id },
      { source: maria.id,  target: bogota.id },
    ]);
  }, []);

  return (
    <div className="App">
      <h1>Grafo de Amigos y Ciudades</h1>
      <select onChange={e => setFilterCity(e.target.value)}>
        <option value="">Todas</option>
        <option value="city-medellín">Medellín</option>
        <option value="city-bogotá">Bogotá</option>
      </select>
      <GraphView nodes={nodes} links={links} />
    </div>
  );
}

export default App;
