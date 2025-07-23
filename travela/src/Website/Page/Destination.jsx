import React from 'react'
import Header2 from '../Coman/Header2'
import Footer from '../Coman/Footer'

function Destination() {
    return (
        <div>
            <Header2 title="Destinantions" name="destinations"/>
            <div>
                {/* Destination Start */}
                <div className="container-fluid destination py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Destination</h5>
                            <h1 className="mb-0">Popular Destination</h1>
                        </div>
                        <div className="tab-class text-center">
                            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-dark" style={{ width: 150 }}>All</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-dark" style={{ width: 150 }}>USA</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{ width: 150 }}>Canada</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{ width: 150 }}>Europe</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{ width: 150 }}>China</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                        <span className="text-dark" style={{ width: 150 }}>Singapore</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-xl-8">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-1.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">New York City</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-1.jpg" data-lightbox="destination-1"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-2.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">Las vegas</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-2.jpg" data-lightbox="destination-2"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-7.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-7.jpg" data-lightbox="destination-7"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-8.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-8.jpg" data-lightbox="destination-8"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="destination-img h-100">
                                                <img className="img-fluid rounded w-100 h-100" src="img/destination-9.jpg" style={{ objectFit: 'cover', minHeight: 300 }} alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-9.jpg" data-lightbox="destination-4"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-4.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-4.jpg" data-lightbox="destination-4"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-5" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-6" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Destination End */}
                {/* Subscribe Start */}
                <div className="container-fluid subscribe py-5">
                    <div className="container text-center py-5">
                        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                            <h5 className="subscribe-title px-3">Subscribe</h5>
                            <h1 className="text-white mb-4">Our Newsletter</h1>
                            <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
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
<Footer/>
        </div>
    )
}

export default Destination
