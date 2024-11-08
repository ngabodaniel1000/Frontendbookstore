// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Books from './components/Books';
import About from './components/About';
import Review from './components/Review';
import NavbarWrapper from './components/Navbarwrapper.jsx';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); 
      return newMode;
    });
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode?'bg-[#1a1a1a] [w-100%] h-[100%]':'bg-[white]'}`}>
        {/* Pass darkMode and toggleDarkMode as props */}
        <NavbarWrapper darkmode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/signup" element={<Signup darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/home" element={<Home darkmode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/books" element={<Books darkmode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About darkmode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/review" element={<Review darkmode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
