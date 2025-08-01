import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';

function Browsebook() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/mybook');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddToCart = async (book) => {
    try {
      const res = await axios.get(`http://localhost:3000/cart?id=${book.id}`);
      if (res.data.length > 0) {
        setMessage('❗ Book already in cart');
        setTimeout(() => setMessage(''), 2000);
        return;
      }
      await axios.post('http://localhost:3000/cart', book);
      setMessage('✅ Book added to cart!');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Failed to add book.');
    } finally {
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">📚 Browse Books</h2>
        {message && <div className="alert alert-info text-center">{message}</div>}

        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 mb-4" key={book.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={book.image || 'https://via.placeholder.com/250x350?text=No+Image'}
                  alt={book.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author}<br />
                    <strong>Genre:</strong> {book.genre}<br />
                    <strong>Price:</strong> ₹{book.price}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleAddToCart(book)}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Browsebook;
