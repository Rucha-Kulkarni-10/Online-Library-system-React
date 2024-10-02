
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy'];
  const popularBooks = [
    { id: 1, title: 'The Great Gatsby' },
    { id: 2, title: '1984' },
    { id: 3, title: 'Sapiens' },
    { id: 4, title: 'Dune' },
    { id: 5, title: 'The Subtle Art of Not Giving a F*ck' },
  ];


  return (
    <div className='main-div'>
      <h1 className='h1'>Welcome to the Library</h1>
      
      <div className='inner-div'>
      <ul>
      <h2>Categories</h2>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <ul>
      <h2>Popular Books</h2>
        {popularBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> 
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default HomePage;
