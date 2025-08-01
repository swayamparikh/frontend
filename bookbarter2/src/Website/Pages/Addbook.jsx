import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';

function Addbook() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        image: '',
        price: ''
    });

    const [errors, setErrors] = useState({});
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await axios.get('http://localhost:3000/mybook');
            setBooks(res.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.author.trim()) newErrors.author = 'Author is required';
        if (!formData.genre.trim()) newErrors.genre = 'Genre is required';
        if (!formData.image.trim()) newErrors.image = 'Image URL is required';
        if (!formData.price.trim()) {
            newErrors.price = 'Price is required';
        } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
            newErrors.price = 'Price must be a valid number';
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
                const response = await axios.post('http://localhost:3000/mybook', formData);
                setBooks([...books, response.data]);
                setFormData({ title: '', author: '', genre: '', image: '', price: '' });
                alert('Book added successfully!');
            } catch (error) {
                console.error('Error adding book:', error);
                alert('Failed to add book');
            }
        }
    };

    return (
        <div style={{ fontFamily: 'Poppins, sans-serif', color: '#333' }}>
            <Header />

            <div className="container mt-4" style={{ maxWidth: '700px' }}>
                <h3 className="mb-3">Add a New Book</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors.title && <div className="text-danger">{errors.title}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input
                            type="text"
                            name="author"
                            className="form-control"
                            value={formData.author}
                            onChange={handleChange}
                        />
                        {errors.author && <div className="text-danger">{errors.author}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            className="form-control"
                            value={formData.genre}
                            onChange={handleChange}
                        />
                        {errors.genre && <div className="text-danger">{errors.genre}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            value={formData.image}
                            onChange={handleChange}
                        />
                        {errors.image && <div className="text-danger">{errors.image}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price (₹)</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        {errors.price && <div className="text-danger">{errors.price}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Add Book</button>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Addbook;
