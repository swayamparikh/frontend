import React from 'react';
import { FaUserShield, FaBook, FaUsers, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function Aheader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear auth/session storage
    // localStorage.removeItem('admin'); // if using
    // sessionStorage.clear();

    navigate('/alogin');
  };

  const sidebarStyle = {
    width: '240px',
    minHeight: '100vh',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    boxShadow: '2px 0 20px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #e5e7eb',
  };

  const brandStyle = {
    padding: '24px',
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: '700',
    color: '#4f46e5',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
  };

  const navStyle = {
    padding: '20px 0',
    flex: 1,
  };

  const ulStyle = {
    listStyle: 'none',
    padding: '0 10px',
    margin: 0,
  };

  const linkBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '12px 20px',
    margin: '6px 0',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    color: '#374151',
    transition: '0.2s ease-in-out',
    cursor: 'pointer',
  };

  const activeStyle = {
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
  };

  const hoverStyle = {
    backgroundColor: '#f3f4f6',
    color: '#4f46e5',
  };

  return (
    <div style={sidebarStyle}>
      <div style={brandStyle}>📚 BookBarter Admin</div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <NavLink
              to="/admin"
              style={({ isActive }) => ({
                ...linkBaseStyle,
                ...(isActive ? activeStyle : {}),
              })}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkBaseStyle)}
            >
              <FaHome size={18} /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/managebook"
              style={({ isActive }) => ({
                ...linkBaseStyle,
                ...(isActive ? activeStyle : {}),
              })}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkBaseStyle)}
            >
              <FaBook size={18} /> Manage Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              style={({ isActive }) => ({
                ...linkBaseStyle,
                ...(isActive ? activeStyle : {}),
              })}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkBaseStyle)}
            >
              <FaUsers size={18} /> Manage Users
            </NavLink>
          </li>
          <li>
            <div
              onClick={handleLogout}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, linkBaseStyle)}
              style={linkBaseStyle}
            >
              <FaSignOutAlt size={18} /> Logout
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Aheader;
