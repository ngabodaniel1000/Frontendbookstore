import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Team from "../assets/team.jpg"
import Footer from './Footer';

function About({darkmode}) {
    const [username, setUsername] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
        try {
          const response = await axios.get('http://localhost:2001/dashboard', { withCredentials: true });
          if (!response.data.loggedIn) {
            navigate('/');
          }
          else{
            setUsername(response.data.user);
          }
  
        } catch (error) {
          console.error('No active session found:', error);
        }
      };
  
      checkSession();
    }, [navigate]);
  return (
    <div>
      <p className={`mt-4 ${darkmode ? 'text-yellow-400' : 'text-gray-800'}`}>
      <section className={`flex flex-col md:flex-row items-center justify-around p-5 ${darkmode ? 'text-white' : 'text-black'}`}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome to Bookstock</h2>
          <p className="mb-4">
          Welcome to Bookstock, where we believe in the power of storytelling. Our passion for literature drives us to create a vibrant community of book lovers.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our History</h3>
          <p className="mb-4">
          Founded in 2024, Bookstock began as a small online platform. Over the years, we have grown into a beloved hub for book enthusiasts.
          We envision a world where every individual has access to books that ignite their imagination and foster understanding among cultures.
          </p>
          <h3 className="text-xl font-semibold mb-2">What we offer  </h3>
          <p>
          We offer a wide range of services, including book reviews, author interviews, and a curated selection of books across various genres.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={Team} alt="Meet Our Team" className="w-full h-auto rounded-lg" />
        </div>
      </section>
      </p>
      <Footer />
    </div>
  )
}

export default About