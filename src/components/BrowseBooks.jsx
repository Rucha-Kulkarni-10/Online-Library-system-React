import './BrowseBooks.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BrowseBooks = () => {
  const { category } = useParams(); 
  const books = useSelector((state) => state.books); // getting books from redux store
  
  const filteredBooks = books.filter((book) =>
    category === 'all'
      ? true
      : book.category.toLowerCase() === category.toLowerCase()
  );

  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtering title by converting into lowercase
  const searchedBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Books` : 'All Books'}</h1>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => (
            <li key={book.id}>
              <span>
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </span>
              <Link to={`/book/${book.id}`}> (View Details)</Link>
            </li>
          ))
        ) : (
          <li>No books found</li>
        )}
      </ul>
    </div>
  );
};

export default BrowseBooks;
