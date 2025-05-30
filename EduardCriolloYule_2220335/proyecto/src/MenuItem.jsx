import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <li>
      <Link to={item.link}>{item.title}</Link>
      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;