import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

function Books({ darkmode }) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("harry potter");
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to fetch books by search query
  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=AIzaSyCCk2DYSidPSrzkKxJ_Em3k4nA8Gaob8po`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  // Function to fetch details of a single book by its ID
  const fetchBookDetails = async (bookId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyCCk2DYSidPSrzkKxJ_Em3k4nA8Gaob8po`
      );
      setSelectedBook(response.data);
    } catch (error) {
      console.error("Error fetching book details", error);
    }
  };

  // useEffect to automatically search for Harry Potter when the component mounts
  useEffect(() => {
    fetchBooks(searchTerm);
  }, []); // Run this effect once when the component mounts

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm) {
      fetchBooks(searchTerm);
    }
  };

  // Handle book click to view details
  const handleBookClick = (bookId) => {
    fetchBookDetails(bookId);
  };

  const defaultImageUrl = "https://via.placeholder.com/150";

  return (
    <div className={`mt-[120px] md:mt-0 flex flex-col w-[100%] pt-10 h-[100%] ${darkmode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl font-bold mb-8 ${darkmode ? 'text-white' : 'text-black'}`}>Book Search</h1>
        <div className="flex mb-8">
          <input
            type="text"
            placeholder="Search for books"
            value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-yellow-400 text-white rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => handleBookClick(book.id)}
              className={`relative flex flex-col justify-center items-center w-full h-[400px] text-center overflow-hidden ${
                darkmode ? 'bg-[#444] text-white shadow-[#222]' : 'bg-white text-black shadow-lg'
              }`}
            >
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || defaultImageUrl}
                alt={book.volumeInfo.title}
                onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
                className="h-[80%] w-[80%] transition-opacity duration-300 hover:opacity-20"
              />
              <p className={`${darkmode ? 'text-white' : 'text-black'} text-lg mt-2`}>{book.volumeInfo.title}</p>
              
              {/* Hover details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">{book.volumeInfo.title}</h3>
                <p className="text-sm mt-1"><strong>Author:</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author"}</p>
                <p className="text-sm"><strong>Published:</strong> {book.volumeInfo.publishedDate}</p>
                <p className="text-xs mt-2">{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + "..." : "No description available"}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedBook && (
          <div className={`mt-8 p-6 rounded-lg ${darkmode ? 'bg-[#444] text-white shadow-[#222]' : 'bg-white text-black shadow-lg'}`}>
            <h2 className="text-2xl font-bold mb-4">Selected Book Details</h2>
            <div className="flex flex-col md:flex-row">
              <img
                src={selectedBook.volumeInfo.imageLinks?.thumbnail || defaultImageUrl}
                alt={selectedBook.volumeInfo.title}
                onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
                className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-6 rounded"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{selectedBook.volumeInfo.title}</h3>
                <p className="mb-2">by {selectedBook.volumeInfo.authors ? selectedBook.volumeInfo.authors.join(", ") : "Unknown Author"}</p>
                <p className="mb-1">Published Date: {selectedBook.volumeInfo.publishedDate}</p>
                <p className="mb-1">Publisher: {selectedBook.volumeInfo.publisher}</p>
                <p className="mb-1">Categories: {selectedBook.volumeInfo.categories ? selectedBook.volumeInfo.categories.join(", ") : "No Categories"}</p>
                <p className="mb-1">Page Count: {selectedBook.volumeInfo.pageCount}</p>
                <p className="mb-1">Language: {selectedBook.volumeInfo.language}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Books;
