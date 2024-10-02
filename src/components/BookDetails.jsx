import "./BrowseBooks.css";
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams(); 
  const books = useSelector((state) => state.books); // Get books from Redux state

  // Find the book by ID
  const book = books.find((book) => book.id === parseInt(id));

  // if book is not found
  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className='Details-div'>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p className="rating">Rating: {book.rating}</p>
      <Link to="/books/all">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
