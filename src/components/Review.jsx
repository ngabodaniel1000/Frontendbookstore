import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function Review({ darkmode }) {
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
    {
      id: 5,
      name: 'Michael Johnson',
      date: '6 months ago',
      rating: 4,
      text: 'Great ambiance, but the seating could be more comfortable.',
    },
    {
      id: 6,
      name: 'Sophia Chen',
      date: '2 years ago',
      rating: 5,
      text: 'Absolutely love their pastries! Fresh and delicious.',
    },
    {
      id: 7,
      name: 'James Smith',
      date: '4 months ago',
      rating: 3,
      text: 'Good coffee, but the service was a bit slow during peak hours.',
    },
    {
      id: 8,
      name: 'Olivia Brown',
      date: '1 year ago',
      rating: 5,
      text: 'A cozy place with a wonderful vibe! I keep coming back.',
    },
    {
      id: 9,
      name: 'Liam Garcia',
      date: '2 years ago',
      rating: 5,
      text: 'Their lattes are the best in town! Highly recommend.',
    },
    {
      id: 10,
      name: 'Ava Martinez',
      date: '5 months ago',
      rating: 4,
      text: 'Nice place to hang out, though it gets crowded at times.',
    },
    {
      id: 11,
      name: 'Noah Wilson',
      date: '3 weeks ago',
      rating: 4,
      text: 'Friendly baristas and excellent selection of teas.',
    },
    {
      id: 12,
      name: 'Mia Anderson',
      date: '1 month ago',
      rating: 5,
      text: 'The perfect spot for working or relaxing with a good book.',
    },
  ];

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

  return (
    <div className='h-[100vh]'>
      <div className="w-full flex flex-col items-center my-10">
        <h2 className={`${darkmode ? 'text-yellow-300' : ''} text-2xl font-bold mb-8`}>
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
      <Footer />
    </div>
  );
}

export default Review;
