import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const redirect = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("Uid")) {
            redirect("/login");
        }
    }, [redirect]);

    const logout = () => {
        localStorage.removeItem("Uid");
        localStorage.removeItem("Uname");
        redirect("/login");
    };

    return (
        <div>
            <div>
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <NavLink to="/" className="navbar-brand p-0">
                            <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Travela</h1>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/Service" className="nav-item nav-link">Services</NavLink>
                                <NavLink to="/Packages" className="nav-item nav-link">Packages</NavLink>
                                <NavLink to="/Blog" className="nav-item nav-link">Blog</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/Blog" className="dropdown-item">Destination</NavLink>
                                        <NavLink to="/exploretours" className="dropdown-item">Explore Tour</NavLink>
                                        <NavLink to="/travelbooking" className="dropdown-item">Travel Booking</NavLink>
                                        <NavLink to="/ourgallery" className="dropdown-item">Our Gallery</NavLink>
                                        <NavLink to="/travelguides" className="dropdown-item">Travel Guides</NavLink>
                                        <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="/notfound" className="dropdown-item">404 Page</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>

                                {/* Hello User */}
                                {localStorage.getItem("Uid") && (
                                    <NavLink to="/edit" className="nav-item nav-link">
                                        Hello {localStorage.getItem("Uname")}
                                    </NavLink>
                                )}

                                {/* Login / Logout */}
                                {localStorage.getItem("Uid") ? (
                                    <NavLink onClick={logout} className="nav-item nav-link">Logout</NavLink>
                                ) : (
                                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                                )}
                            </div>
                        </div>
                    </nav>

                    {/* Carousel Start */}
                    {/* (No changes made below as requested) */}
                    ...
                </div>
            </div>
        </div>
    );
}

export default Header;
