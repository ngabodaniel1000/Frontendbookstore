// Tooglemode.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Tooglemode({ darkmode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="p-2 md:ml-0 ml-[90px] mt-20 md:mt-0">
      {darkmode ? (
        <FontAwesomeIcon icon={faSun} className="text-yellow-500 text-2xl mt-6" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-yellow-500 text-2xl mt-6" />
      )}
    </button>
  );
}

export default Tooglemode;
