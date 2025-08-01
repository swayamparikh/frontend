import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("Uid");

  const navLinkStyle = {
    fontWeight: '500',
    color: '#000',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '6px',
    fontSize: '16px',
    marginRight: '20px',
  };

  const underlineStyle = {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: '3px',
    width: '0%',
    backgroundColor: '#000',
    transition: 'width 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    const span = e.target.querySelector('span');
    if (span) span.style.width = '100%';
  };

  const handleMouseLeave = (e) => {
    const span = e.target.querySelector('span');
    if (span) span.style.width = '0%';
  };

  const logout = () => {
    localStorage.removeItem("Uid");
    localStorage.removeItem("Uname");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#fff' }}>
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-semibold fs-4 text-dark" style={{ fontWeight: '600' }}>
          BookBarter
        </NavLink>

        {/* Nav Links */}
        <div className="d-none d-lg-flex gap-3">
          {['/', '/browse', '/mybooks', '/addbook', '/about', '/contactus', '/mycart'].map((path, i) => {
            const names = ['Home', 'Browse Books', 'My Books', 'Add Book', 'About Us', 'Contact Us', 'Mycart'];
            return (
              <NavLink
                key={path}
                to={path}
                className="nav-link"
                style={navLinkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {names[i]} <span style={{ ...underlineStyle, display: 'block' }}></span>
              </NavLink>
            );
          })}
        </div>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
            <FaUser
              size={18}
              className="text-dark dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              style={{ cursor: 'pointer' }}
            />
            <ul className="dropdown-menu dropdown-menu-end">
              {isLoggedIn ? (
                <>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                </>
              ) : (
                <>
                  <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/signup">Signup</NavLink></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
