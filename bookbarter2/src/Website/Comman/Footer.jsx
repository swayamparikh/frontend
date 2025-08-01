import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <footer
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '40px 20px',
          marginTop: '50px',
        }}
      >
        <div className="container">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold">BookBarter</h4>
              <p style={{ fontSize: '14px' }}>
                Exchange books easily with fellow readers. Discover new reads, share your own,
                and be a part of the book-loving community!
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Browse Books</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Add Book</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>My Profile</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div className="col-md-4 mb-4">
              <h5>Help & Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>FAQs</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms & Conditions</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <hr style={{ borderColor: '#555' }} />
          <div className="text-center mt-3">
            <p style={{ fontSize: '14px' }}>© {new Date().getFullYear()} BookBarter. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
