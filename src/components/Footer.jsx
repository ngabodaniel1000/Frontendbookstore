import React from 'react'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer({darkmode}) {
  return (
    <div>
        {/* Step 3: Add Footer */}
        <footer className={`w-full py-8 mt-10 ${darkmode ? 'bg-[#222]' : 'bg-gray-200'} text-center`}>
        <div className="flex flex-col md:flex-row justify-around mb-4">
          <div>
            <h4 className={`${darkmode ? 'text-white' : 'text-black'} font-bold`}>Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className={`${darkmode ? 'text-white' : 'text-black'} hover:underline`}>Home</a></li>
              <li><a href="/books" className={`${darkmode ? 'text-white' : 'text-black'} hover:underline`}>Books</a></li>
              <li><a href="/about" className={`${darkmode ? 'text-white' : 'text-black'} hover:underline`}>About</a></li>
              <li><a href="/review" className={`${darkmode ? 'text-white' : 'text-black'} hover:underline`}>Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className={`${darkmode ? 'text-white' : 'text-black'} font-bold`}>Contact Us</h4>
            <p className={`${darkmode ? 'text-white' : 'text-black'} text-sm`}>Email: info@yourwebsite.com</p>
            <p className={`${darkmode ? 'text-white' : 'text-black'} text-sm`}>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className={`${darkmode ? 'text-white' : 'text-black'} font-bold`}>Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className={`${darkmode ? 'text-white' : 'text-black'} text-2xl`} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={`${darkmode ? 'text-white' : 'text-black'} text-2xl`} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className={`${darkmode ? 'text-white' : 'text-black'} text-2xl`} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={`${darkmode ? 'text-white' : 'text-black'} text-2xl`} />
              </a>
            </div>
          </div>
        </div>
        <p className={`${darkmode ? 'text-white' : 'text-black'} text-sm`}>© 2023 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
