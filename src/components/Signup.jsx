import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import Manreading from "../assets/hand-drawn-glossary-illustration_23-2150287958.jpg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Signup({ darkMode }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

   useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('https://backend-bookstore-9xux.onrender.com/dashboard', { withCredentials: true });
        if (response.data.loggedIn) {
          navigate('/home');
        }
      } catch (error) {
        console.error('Please login:', error);
      }
    };
    checkSession();
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("https://backend-bookstore-9xux.onrender.com/signup", {
        username,
        password,
        email
      },{ withCredentials: true });

      if(response.status == 201){
        Swal.fire({
          title: 'Success!',
          text: 'You have signed up successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        navigate("/")
      }
    
    } catch (error) {
      // Display the error message from the server
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.log(error); 
    }
  }

  return (
    <div className={`flex flex-col md:flex-row min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>  
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img 
          src={Manreading} 
          alt="Man reading a book" 
          className="w-full h-full object-cover md:rounded-l-5xl"
        />
        {/* Optional Overlay for styling */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 md:rounded-l-3xl"></div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-5 md:p-10">
        <form 
          autoComplete='true' 
          onSubmit={handleSignup} 
          className={`flex flex-col w-full max-w-sm h-auto border-2 border-red-200 p-5 rounded-lg shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <h1 className="text-2xl text-center font-bold mb-4">Signup now</h1>
          <label htmlFor="username" className="mb-2 text-center">Username</label>
          <input type="text" className="text-center mb-4 p-2 outline-none border-2 border-gray-300 rounded-md text-black" placeholder="Enter your username" onChange={(e) => {
            setUsername(e.target.value)
          }}/>
          <label htmlFor="email" className="mb-2 text-center">Email</label>
          <input type="email" className="text-center mb-4 p-2 outline-none border-2 border-gray-300 rounded-md text-black" placeholder="Enter your email" onChange={(e) => {
            setEmail(e.target.value)
          }}/>
          <label htmlFor="password" className="mb-2 text-center">Password</label>
          <input type="password" className="text-center mb-4 p-2 outline-none border-2 border-gray-300 rounded-md text-black" placeholder="Enter your password" onChange={(e) => {
            setPassword(e.target.value) 
          }}/>
          <button className="bg-red-400 text-white py-2 px-4 mt-4 rounded hover:bg-red-600">Signup</button>
          <div className="mt-4 text-center">
            already have an account? <a href="/" className="text-red-400 underline">Login</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
