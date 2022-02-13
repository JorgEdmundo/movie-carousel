import React, { useContext } from 'react';

import Button from '../Button/Button';

import { NavigationContext } from '../../../context/NavigationContext';

import './header.scss';

function Header() {
  const { setPage } = useContext(NavigationContext);
  return (
    <div className="header">
      <div className="header-wrap container">
        <h1 onClick={() => setPage('home')} className="title">
          My Movie Picker
        </h1>
        <div className="actions">
          <Button handleClick={() => setPage('home')}>Home</Button>
          <Button handleClick={() => setPage('wishlist')}>
            Go to Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
