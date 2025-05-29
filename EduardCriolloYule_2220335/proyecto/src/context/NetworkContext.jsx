import React, { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { initialNetwork } from '../data';

export const NetworkContext = createContext();

const addZoneRec = (node, parentId, newZone) => {
  if (node.id === parentId) {
    return {
      ...node,
      children: [...node.children, newZone]
    };
  }
  return {
    ...node,
    children: node.children.map(child => addZoneRec(child, parentId, newZone))
  };
};

const editZoneRec = (node, targetId, newName) => {
  if (node.id === targetId) {
    return { ...node, name: newName };
  }
  return {
    ...node,
    children: node.children.map(child => editZoneRec(child, targetId, newName))
  };
};

function addZoneImmutable(node, parentId, newZone) {
  if (node.id === parentId) {
    return {
      ...node,
      children: [...node.children, newZone]
    };
  }
  return {
    ...node,
    children: node.children.map(child =>
      addZoneImmutable(child, parentId, newZone)
    )
  };
}

function networkReducer(state, action) {
  switch (action.type) {
    case 'ADD_CITY': {
      const newCity = {
        id: uuid(),
        name: action.payload.name,
        zones: { id: uuid(), name: 'root', children: [] }
      };
      return {
        ...state,
        cities: [...state.cities, newCity]
      };
    }

    case 'REMOVE_CITY': {
      const cityId = action.payload.id;
      return {
        ...state,
        cities: state.cities.filter(c => c.id !== cityId),
        links: state.links.filter(
          l => l.source !== cityId && l.target !== cityId
        )
      };
    }

    case 'ADD_ZONE': {
      const { cityId, parentId, name } = action.payload;
      const newZone = { id: uuid(), name, children: [] };
      const cities = state.cities.map(city => {
        if (city.id !== cityId) return city;
        return {
          ...city,
          zones: addZoneImmutable(city.zones, parentId, newZone)
        };
      });
      return { ...state, cities };
    }

    case 'EDIT_ZONE': {
      const { cityId, zoneId, name } = action.payload;
      return {
        ...state,
        cities: state.cities.map(city => {
          if (city.id !== cityId) return city;
          return {
            ...city,
            zones: editZoneRec(city.zones, zoneId, name)
          };
        })
      };
    }

    default:
      return state;
  }
}

export function NetworkProvider({ children }) {
  const [state, dispatch] = useReducer(networkReducer, initialNetwork);
  return (
    <NetworkContext.Provider value={{ state, dispatch }}>
      {children}
    </NetworkContext.Provider>
  );
}