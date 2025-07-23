import React from 'react'
import Header2 from '../Coman/Header2'
import Footer from '../Coman/Footer'

function Contact() {
    return (
        <div>
          <Header2 title="Contact us" name="contact"/>
            <div>
                {/* Contact Start */}
                <div className="container-fluid contact bg-light py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Contact Us</h5>
                            <h1 className="mb-0">Contact For Any Query</h1>
                        </div>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-4">
                                <div className="bg-white rounded p-4">
                                    <div className="text-center mb-4">
                                        <i className="fa fa-map-marker-alt fa-3x text-primary" />
                                        <h4 className="text-primary"><address /></h4>
                                        <p className="mb-0">123 ranking Street, <br /> New York, USA</p>
                                    </div>
                                    <div className="text-center mb-4">
                                        <i className="fa fa-phone-alt fa-3x text-primary mb-3" />
                                        <h4 className="text-primary">Mobile</h4>
                                        <p className="mb-0">+012 345 67890</p>
                                        <p className="mb-0">+012 345 67890</p>
                                    </div>
                                    <div className="text-center">
                                        <i className="fa fa-envelope-open fa-3x text-primary mb-3" />
                                        <h4 className="text-primary">Email</h4>
                                        <p className="mb-0">info@example.com</p>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3 className="mb-2">Send us a message</h3>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12">
                                <div className="rounded">
                                    <iframe className="rounded w-100" style={{ height: 450 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
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

export default Contact
