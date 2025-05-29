import React, { useContext } from 'react';
import Tree from 'react-d3-tree';
import { NetworkContext } from '../../context/NetworkContext';

const convertNode = node => ({
  name: node.name,
  children: node.children.map(convertNode)
});

export default function ZoneTree({ selectedCityId, onNodeClick }) {
  const { state } = useContext(NetworkContext);
  const city = state.cities.find(c => c.id === selectedCityId);

  if (!city) return <p>Selecciona una ciudad para ver el árbol de zonas.</p>;

  const treeData = convertNode(city.zones);

  return (
    <div id="treeWrapper" style={{ width: '100%', height: '400px' }}>
      <Tree
        data={treeData}
        translate={{ x: 200, y: 50 }}
        orientation="vertical"
        zoomable={true}
        collapsible={false}
        onNodeClick={nodeDatum => onNodeClick(nodeDatum.attributes.id)}
      />
    </div>
  );
}