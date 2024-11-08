import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bookcollection from '../assets/booker.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book1 from '../assets/book1.jpg';
import Book2 from '../assets/book2.jpg';
import Book4 from '../assets/book4.jpg';
import Book3 from "../assets/book-cover-To-Kill-a-Mockingbird-many-1961.jpg";
import Book5 from "../assets/Les Misérables.jpg";
import Book6 from "../assets/harry potter.jfif";
import Review from './Review'; // Import Review component
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';
import Team from "../assets/team.jpg"

const reviews = [
  {
    id: 1,
    name: 'Elizabeth Senter',
    date: '3 years ago',
    rating: 5,
    text: 'I love that I could see into her mindset and read exactly what she was feeling when she thought out situations',
  },
  {
    id: 2,
    name: 'Anna Lobastova',
    date: '3 months ago',
    rating: 5,
    text: 'Yummy coffee and friendly staff. Multiple counter culture roasts available!',
  },
  {
    id: 3,
    name: 'Arkopal Choudhury',
    date: '3 years ago',
    rating: 5,
    text: 'It is a nice place for a quick coffee or a snack. Provides a peaceful atmosphere.',
  },
  {
    id: 4,
    name: 'Janice Taylor',
    date: '1 year ago',
    rating: 4,
    text: 'The service was great, but we were disappointed in the selection of drinks.',
  },
];

function Home({ darkmode }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('https://backend-bookstore-9xux.onrender.com/dashboard', { withCredentials: true });
        if (!response.data.loggedIn) {
          navigate('/');
        } else {
          setUsername(response.data.user);
        }
      } catch (error) {
        console.error('No active session found:', error);
      }
    };
    checkSession();
  }, [navigate]);

  const books = [
    { id: 1, title: 'Walk into Shadows', author: 'John Doe', releaseDate: '2020-01-01', description: 'A thrilling mystery novel', image: Book1 },
    { id: 2, title: 'Hide and Seek', author: 'Jane Smith', releaseDate: '2021-02-15', description: 'A suspenseful tale of survival', image: Book2 },
    { id: 3, title: 'Alone: A True Story', author: 'Alex Green', releaseDate: '2019-05-10', description: 'An inspiring real-life journey', image: Book4 },
    { id: 5, title: 'Les miserables', author: 'jean todibo', releaseDate: '1987-02-19', description: 'An inspiring real-life sadness', image: Book5 },
    { id: 4, title: 'Mocking bird', author: 'Peter sam', releaseDate: '2017-05-14', description: 'chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape', image: Book3 },
    { id: 6, title: 'Harry potter', author: 'Jk rowling', releaseDate: '2012-01-10', description: 'he novels chronicle the lives of a young wizard, Harry Potter, and his friends, ', image: Book6 },
  ];

  return (
    <div className={`mt-[120px] md:mt-0 flex flex-col w-[100%] pt-10 h-[100%] ${darkmode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className='flex flex-col md:flex-row w-[100%] mt-1 h-[400px]'>
        <div className={`div1 w-[100%] text-sm md:text-xl h-[400px] ml-0 md:ml-[200px] p-10 ${darkmode ? 'text-white' : 'text-black'}`}>
          <h1>E-book Library</h1>
          <p>Discover a world of knowledge<br /> with our vast collection of books</p>
          <p>Download your favorite book instantly<br /> and start reading now.<br /> Search by author, genre, or title.</p>
        </div>
        <div className="div2 w-[100%] h-[400px]">
          <img src={Bookcollection} alt="Bookcollection" className={`w-[80%] md:ml-0 ml-10 ${darkmode ? 'opacity-40' : ''}`} />
        </div>
      </div>

      <h1 className={`${darkmode ? 'text-white' : 'text-black'} ml-5 md:ml-[250px] text-xl font-bold md:mt-0 mt-[100px]`}>Best Downloaded Books</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:ml-[200px] mt-5'>
        {books.map(book => (
          <div
            key={book.id}
            className="relative flex flex-col justify-center items-center w-[350px] h-[400px] text-center overflow-hidden"
          >
            <img src={book.image} alt={book.title} className="h-[80%] w-[80%] transition-opacity duration-300 hover:opacity-20" />
            <p className={`${darkmode ? 'text-white' : 'text-black'} text-lg mt-2`}>{book.title}</p>
            
            {/* Hover details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-sm mt-1"><strong>Author:</strong> {book.author}</p>
              <p className="text-sm"><strong>Released:</strong> {book.releaseDate}</p>
              <p className="text-xs mt-2">{book.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center my-10">
  <h2 className={`${darkmode ? 'text-white' : 'text-black'} text-2xl font-bold mb-8`}>
    What our customers think about us
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
    {reviews.map((review) => (
      <div
        key={review.id}
        className={`p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg ${
          darkmode ? 'bg-[#444] text-white shadow-[#222]' : 'bg-white text-black shadow-lg'
        }`}
      >
        <FontAwesomeIcon icon={faUser} className="text-gray-500 text-4xl mb-4" />
        <h3 className="font-bold">{review.name}</h3>
        <p className="text-sm text-gray-500">{review.date}</p>
        <div className="flex justify-center items-center my-2">
          {Array(review.rating)
            .fill(0)
            .map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 mx-1" />
            ))}
        </div>
        <p className="text-center">{review.text}</p>
      </div>
    ))}
  </div>
</div>

      
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

    <Footer />
    </div>
    
  );
}

export default Home;
