import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUser } from 'react-icons/fa';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';
import profileImage from '../Images/profile.jpg';
import CountUp from 'react-countup';

function Home() {
    return (
        <div style={{ fontFamily: 'Poppins, sans-serif', color: '#333' }}>

            <Header />

            {/* Hero Section */}
            <section className="text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <h1 className="display-4 fw-bold">Swap. Read. Repeat.</h1>
                <p className="lead mb-4">India's largest book exchanging platform built for readers by readers.</p>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-dark px-4">Browse Books</button>
                    <button className="btn btn-outline-dark px-4">Add Your Book</button>
                </div>
            </section>

            {/* About Section */}
            <section className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3">What is BookBarter?</h2>
                        <p className="text-muted">
                            BookBarter is a community-driven platform where readers can exchange books
                            with each other. Say goodbye to expensive purchases and hello to sustainable reading.
                        </p>
                        <p className="text-muted">
                            The platform is completely free and built to promote a circular economy in the reading world.
                            Whether you're a student, a professional, or simply a book lover, BookBarter offers something for everyone.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1553729784-e91953dec042"
                            alt="Bookshelf"
                            className="img-fluid rounded-3 shadow"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h3 className="fw-bold mb-5">How It Works</h3>
                    <div className="row">
                        {[
                            { title: 'Upload Your Book', desc: 'Share books you’re done reading.' },
                            { title: 'Discover New Reads', desc: 'Explore books uploaded by others.' },
                            { title: 'Track Requests', desc: 'Manage your requests and exchanges.' },
                            { title: 'Earn Points', desc: 'Get rewarded every time you lend or donate a book.' },
                            { title: 'Instant Messaging', desc: 'Chat with users for quicker exchange decisions.' },
                            { title: 'Book Reviews', desc: 'Write and read reviews to decide what to read next.' },
                        ].map((item, idx) => (
                            <div className="col-md-4 mb-4" key={idx}>
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    <h5 className="fw-semibold mb-2">{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="container py-5">
                <h3 className="text-center fw-bold mb-5">Join a Thriving Community</h3>
                <p className="text-center text-muted mb-4">
                    Over 50,000+ books have already been exchanged through BookBarter. Our users come from various backgrounds,
                    united by their passion for reading and sharing. Become part of a movement that is revolutionizing the way
                    people access books.
                </p>
                <div className="text-center">
                    <button className="btn btn-dark px-5">Join Now</button>
                </div>
            </section>

            {/* Founders Section */}
            <section className="container py-5">
                <h3 className="text-center fw-bold mb-5">Meet the Founder</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center mb-4">
                        <img
                            src={profileImage}
                            alt="Swayam Parikh"
                            className="img-fluid rounded-circle mb-3"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <h5 className="fw-bold mb-1">Swayam Parikh</h5>
                        <small className="text-muted">Founder & Developer</small>
                        <p className="mt-3 text-muted" style={{ fontSize: '14px' }}>
                            Turning the idea of book sharing into an accessible digital experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section with CountUp */}
            <section className="text-center py-5 bg-dark text-white">
                <div className="container">
                    <div className="row justify-content-center gap-4">
                        {[
                            { label: "Books Exchanged", value: 12000 },
                            { label: "Active Users", value: 5800 },
                            { label: "Cities Covered", value: 120 },
                            { label: "Daily Visits", value: 4000 }
                        ].map((item, idx) => (
                            <div className="col-md-3" key={idx}>
                                <h2 className="fw-bold">
                                    <CountUp end={item.value} duration={2.5} separator="," />+
                                </h2>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
