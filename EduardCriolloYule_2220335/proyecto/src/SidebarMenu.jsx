import React from 'react';
import MenuItem from './MenuItem';
import './SidebarMenu.css';

const SidebarMenu = ({ menuTree }) => {
  return (
    <nav className="sidebar">
      <ul>
        <MenuItem item={menuTree} />
      </ul>
    </nav>
  );
};

export default SidebarMenu;