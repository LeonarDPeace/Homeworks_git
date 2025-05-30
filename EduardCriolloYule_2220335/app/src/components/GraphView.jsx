import React from 'react';
import { Graph } from 'react-d3-graph';

export default function GraphView({ nodes, links }) {
  const data = { nodes, links };
  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightblue',
      size: 300,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'lightblue',
    },
    directed: false,
  };

  return <Graph
    id="my-graph"
    data={data}
    config={config}
    onClickNode={(nodeId) => alert(`Clicked node ${nodeId}`)}
  />;
}
