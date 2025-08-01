import React, { useEffect, useState } from 'react';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.contact) {
      newErrors.contact = 'Contact is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Contact must be 10 digits';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log('Submitting form with:', formData);
        await axios.post('http://localhost:3000/contactus', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', contact: '' });
        alert('Form submitted and saved successfully!');
      } catch (error) {
        console.error('Error saving contact form:', error.message);
        alert('Failed to submit. Please try again later.');
      }
    } else {
      console.log('Validation failed:', validationErrors);
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#333' }}>
      <Header />

      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center" data-aos="fade-down">
          <h2 className="fw-bold mb-3">Contact Us</h2>
          <p className="text-muted">We would love to hear from you. Fill out the form below.</p>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: '#fff' }}>
        <div className="container" data-aos="fade-up">
          {!submitted ? (
            <form className="mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Contact</label>
                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && <div className="text-danger mt-1">{errors.contact}</div>}
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-2">
                Submit
              </button>

              <NavLink to="/" className="btn btn-outline-dark mt-3 w-100">
                Back to Home
              </NavLink>
            </form>
          ) : (
            <div className="text-center py-4">
              <h5 className="text-success">Thank you! Your message has been received.</h5>
              <NavLink to="/" className="btn btn-outline-dark mt-3">
                Go Back Home
              </NavLink>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contactus;
