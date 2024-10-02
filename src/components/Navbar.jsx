
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/books/all">Browse Books</Link>
    <Link to="/add">Add Book</Link>
  </nav>
);

export default Navbar;
