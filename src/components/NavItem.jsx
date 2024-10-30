import React from 'react';

const NavItem = ({ children, onClick = () => {}, isActive = false }) => {
  return (
    <button
      className={`tab-btn ${isActive ? 'active' : ''} `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default NavItem;
