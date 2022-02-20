import React from 'react';
import logo from '../images/logo.png';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='airbnb logo' />
    </div>
  );
};

export default Navbar;
