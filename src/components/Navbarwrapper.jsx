import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function NavbarWrapper({ darkmode, toggleDarkMode }) {
  const location = useLocation();

  // Conditionally hide Navbar if on login or signup page
  const hideNavbar = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && (
        <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} /> 
      )}
    </>
  );
}

export default NavbarWrapper;
