import React from 'react'
import Header2 from '../Coman/Header2'
import Footer from '../Coman/Footer'

function Ourgallery() {
    return (
        <div>
            <Header2 title="Our Gallery" name="ourgallery"/>
            <div>
                {/* Gallery Start */}
                <div className="container-fluid gallery py-5 my-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">Our Gallery</h5>
                        <h1 className="mb-4">Tourism &amp; Traveling Gallery.</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                        </p>
                    </div>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                                    <span className="text-dark" style={{ width: 150 }}>All</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                                    <span className="text-dark" style={{ width: 150 }}>World tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                                    <span className="text-dark" style={{ width: 150 }}>Ocean Tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                                    <span className="text-dark" style={{ width: 150 }}>Summer Tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                                    <span className="text-dark" style={{ width: 150 }}>Sport Tour</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-1.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-1.jpg" data-lightbox="gallery-1" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-4.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-4.jpg" data-lightbox="gallery-4" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-5.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-5.jpg" data-lightbox="gallery-5" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-6.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-6.jpg" data-lightbox="gallery-6" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-7.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-7.jpg" data-lightbox="gallery-7" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-8.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-8.jpg" data-lightbox="gallery-8" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-9.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-9.jpg" data-lightbox="gallery-9" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-10.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-10.jpg" data-lightbox="gallery-10" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-2" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-3" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-4" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-5" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery End */}
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

export default Ourgallery
