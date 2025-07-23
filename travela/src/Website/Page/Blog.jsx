import React, { useEffect, useState } from 'react';
import Header2 from '../Coman/Header2';
import Footer from '../Coman/Footer';
import axios from 'axios';

function Blog() {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/blogs");
            console.log(res.data);
            setblogs(res.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    return (
        <div>
            <Header2 title="Our Blog" name="Blog" />
            <div>
                {/* Blog Start */}
                <div className="container-fluid blog py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Our Blog</h5>
                            <h1 className="mb-4">Popular Travel Blogs</h1>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque...
                            </p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {blogs.map((data, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <div className="blog-img-inner">
                                                <img className="img-fluid w-100 rounded-top" style={{ height: "300px" }} src={data.img} alt="Blog" />
                                                <div className="blog-icon">
                                                    <a href="#" className="my-auto">
                                                        <i className="fas fa-link fa-2x text-white" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                                <small className="flex-fill text-center border-end py-2">
                                                    <i className="fa fa-calendar-alt text-primary me-2" />
                                                    {data.date}
                                                </small>
                                                <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2">
                                                    <i className="fa fa-thumbs-up text-primary me-2" />1.7K
                                                </a>
                                                <a href="#" className="btn-hover flex-fill text-center text-white py-2">
                                                    <i className="fa fa-comments text-primary me-2" />1K
                                                </a>
                                            </div>
                                        </div>
                                        <div className="blog-content border border-top-0 rounded-bottom p-4">
                                            <p className="mb-3">{data.posted}</p>
                                            <a href="#" className="h4">{data.name}</a>
                                            <p className="my-3">{data.desc}</p>
                                            <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subscribe Start */}
                <div className="container-fluid subscribe py-5">
                    <div className="container text-center py-5">
                        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                            <h5 className="subscribe-title px-3">Subscribe</h5>
                            <h1 className="text-white mb-4">Our Newsletter</h1>
                            <p className="text-white mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam...
                            </p>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Subscribe End */}
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
