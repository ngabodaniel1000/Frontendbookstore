import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from "../assets/3d-red-book-icon-cartoon-style-stock-vector-illustration_550395-1628.jpg";
import Tooglemode from './Tooglemode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleDarkMode, darkmode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('https://backend-bookstore-9xux.onrender.com/logout', { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col ${darkmode ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black'}`}>
      <div className='flex w-[100%] h-15 justify-between items-center px-4'>
        <div className="flex items-center"> 
          <img className='w-[50px] mr-2' src={Logo} alt="logo" />
          <h1 className='text-xl font-bold'>Book <span className="text-yellow-500"> Stock</span></h1>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>
      <nav className={`w-[100%] text-center h-[10vh] ${!darkmode ? 'bg-white' : 'bg-[#1a1a1a]'} ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex justify-center items-center">
          <ul className="flex md:flex-row text-center flex-col space-x-4 md:space-x-8 mr-5 mt-5">
            <li className={`ml-5 mt-5 md:mt-0 ${darkmode ? 'text-white' : 'text-black'} text-xl  hover:text-gray-700 transition duration-300`}><Link to="/home"> Home</Link></li>
            <li className={`${darkmode ? 'text-white' : 'text-black'} text-xl hover:text-gray-700 transition duration-300'`}><Link to="/books">Books</Link></li>
            <li className={`${darkmode ? 'text-white' : 'text-black'} text-xl hover:text-gray-700 transition duration-300'`}><Link to="/about">About</Link></li>
            <li className={`${darkmode ? 'text-white' : 'text-black'} text-xl hover:text-gray-700 transition duration-300'`}><Link to="/review">Review</Link></li>
          </ul>
          <div className="flex items-center space-x-10">
            <button className="bg-gray-700 hover:bg-gray-800 md:ml-0 ml-[100px] text-white mt-24 md:mt-5 py-2 px-4 rounded transition duration-300 ml-5" onClick={handleLogout}>
              Logout
            </button>
            
            <Tooglemode darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </nav>
      <hr className="border-0 bg-[#333] h-[0.5px] md:mt-2 mt-[100px]" />
    </div>
  );
}

export default Navbar;
