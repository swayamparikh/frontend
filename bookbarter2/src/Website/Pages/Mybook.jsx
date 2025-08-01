import React, { useEffect, useState } from 'react';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';
import axios from 'axios';

function Mybook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get('http://localhost:3000/mybook')
      .then((res) => setBooks(res.data))
      .catch((err) => console.error('Failed to fetch books:', err));
  };

  const deleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:3000/mybook/${id}`);
        fetchBooks(); // Refresh the list after deletion
      } catch (error) {
        console.error('Failed to delete book:', error);
      }
    }
  };

  const cardStyle = {
    perspective: '1000px',
    height: '300px'
  };

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d'
  };

  const frontBackCommon = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  };

  const frontStyle = {
    ...frontBackCommon
  };

  const backStyle = {
    ...frontBackCommon,
    transform: 'rotateY(180deg)',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.flip-inner').style.transform = 'rotateY(180deg)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.flip-inner').style.transform = 'rotateY(0deg)';
  };

  return (
    <div>
      <Header />
      <div className="container py-5">
        <h2 className="mb-4 fw-bold text-center">My Books</h2>
        <div className="row g-4">
          {books.length === 0 ? (
            <p className="text-center text-muted">No books available.</p>
          ) : (
            books.map((book) => (
              <div className="col-md-4" key={book.id}>
                <div
                  className="flip-card"
                  style={cardStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flip-inner" style={innerStyle}>
                    <div className="flip-front" style={frontStyle}>
                      <img
                        src={book.image}
                        alt={book.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="flip-back" style={backStyle}>
                      <h5>{book.title}</h5>
                      <p><strong>Author:</strong> {book.author}</p>
                      <p><strong>Price:</strong> ₹{book.price || 'N/A'}</p>
                      <p style={{ fontSize: '14px' }}>{book.description}</p>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mybook;
