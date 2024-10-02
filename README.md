# Book Library Application

This is a Comprehensive React-based Book Library application that allows users to browse books by categories, view detailed information about specific books, add new books, and filter books by title or author.

## Features

- Home Page: Displays list of book categories, and popular books.
- Browse Books Page: Allows users to filter books by categories and search by title.
- Add Book Page: Allows users to add a new book to the library using a form. Books are managed through Redux.
- Book Details Page: Displays detailed information of selected book.
- 404 Page: Error Page for showing errors.

## Prerequisites

- Node.js 
- npm (Node Package Manager)

## Installation

1. Clone the repository:
 
    - git clone https://github.com/Rucha-Kulkarni-10/Online-Library-system-React.git
    - cd Online-Library-System-React

2. Install Dependencies:
    - npm install    

## Running the Application

1. Start the development server:
    - npm run dev

2. Open your browser and navigate to:    
    - http://localhost:5173/

## Folder Structure


├── public/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── BrowseBooks.css
│   │   ├── BrowseBooks.jsx
│   │   ├── HomePage.css
│   │   ├── BookDetails.jsx
│   │   ├── AddBook.css
│   │   ├── AddBook.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   └── NotFound.jsx
│   ├── redux/
│   │   ├── actions.jsx
│   │   ├── reducer.jsx
│   │   └── store.jsx
│   ├── App.jsx
│   ├── dummyBooks.jsx
│   └── main.jsx
├── README.md
├── package.json
└── .gitignore    

## Usage

  - Displays a list of book categories 
  - Shows a list of popular books with links to view more details.
  - Displays a list of books filtered by the selected category.
  - Search functionality allows filtering books by title.
  - Dynamic routing allows viewing books by category.
  - Displays detailed information for a selected book, including title, author,   description, and rating.
  - A "Back to Browse" link is available to navigate back to the Browse Books page