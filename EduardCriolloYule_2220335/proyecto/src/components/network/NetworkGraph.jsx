import React, { useContext, useMemo } from 'react';
import Tree from 'react-d3-tree';
import { NetworkContext } from '../../context/NetworkContext';

export default function NetworkGraph() {
  const { state } = useContext(NetworkContext);

  const convertZoneNode = zone => ({
    name: zone.name,
    children: zone.children.map(convertZoneNode)
  });

  const treeData = useMemo(() => {
    const nodesById = Object.fromEntries(
      state.cities.map(city => [
        city.id,
        {
          name: city.name,
          children: [convertZoneNode(city.zones)]
        }
      ])
    );

    state.links.forEach(({ source, target }) => {
      const srcNode = nodesById[source];
      const tgtNode = nodesById[target];
      if (srcNode && tgtNode) {
        srcNode.children.push({ name: tgtNode.name, children: tgtNode.children });
      }

      if (srcNode && tgtNode) {
        tgtNode.children.push({ name: srcNode.name, children: srcNode.children });
      }
    });

    return [
      {
        name: 'Red de Ciudades',
        children: Object.values(nodesById)
      }
    ];
  }, [state.cities, state.links]);

  return (
    <div id="networkTree" style={{ width: '100%', height: '600px' }}>
      <Tree 
        data={treeData} 
        orientation="vertical" 
        translate={{ x: 300, y: 50 }} 
        pathFunc="elbow" 
        zoomable={true}
        styles={{
          links: { stroke: '#A8E6CF', strokeWidth: 2 },
          nodes: { node: { circle: { fill: '#DCECC9' } } }
        }}
      />
    </div>
  );
}
