import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:3000/admin');
      const admin = res.data.find(
        (user) =>
          user.email === formData.email &&
          user.password === formData.password
      );

      if (admin) {
        navigate('/admin');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Admin Login</h2>

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#344767',
    textAlign: 'center',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#344767',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ced4da',
    fontSize: '14px',
    outline: 'none',
  },
  error: {
    color: '#e53935',
    fontSize: '13px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(90deg, #cb0c9f, #7928ca)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default Alogin;
