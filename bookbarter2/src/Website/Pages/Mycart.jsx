import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';

function Mycart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:3000/cart');
      setCartItems(res.data);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      fetchCart(); // Refresh after delete
    } catch (error) {
      console.error('Failed to remove:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price), 0);
  };

  return (
    <div>
      <Header />

      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">🛒 My Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">🛍️ Your cart is empty</h4>
            <p>Add books from the browse page to see them here.</p>
          </div>
        ) : (
          <>
            <div className="row">
              {cartItems.map((book) => (
                <div className="col-12 mb-3" key={book.id}>
                  <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center">
                    <img
                      src={book.image || 'https://via.placeholder.com/80'}
                      alt={book.title}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                      className="me-3"
                    />

                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold text-truncate">{book.title}</h6>
                      <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
                        <strong>Author:</strong> {book.author} <br />
                        <strong>Genre:</strong> {book.genre}
                      </p>
                    </div>

                    <div className="text-end ms-auto">
                      <p className="mb-1 fw-bold text-danger">₹{book.price}</p>
                      <div className="d-flex align-items-center gap-2">
                        <select className="form-select form-select-sm" style={{ width: '60px' }}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleRemove(book.id)}
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-end mt-4 pe-2">
              <h5 className="fw-bold">Total: ₹{calculateTotal()}</h5>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Mycart;
