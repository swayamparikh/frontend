import React from 'react'

function Footer() {
  return (
    <div>
     <div>
  {/* Footer Start */}
  <div className="container-fluid footer py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Get In Touch</h4>
            <a href><i className="fas fa-home me-2" /> 123 Street, New York, USA</a>
            <a href><i className="fas fa-envelope me-2" /> info@example.com</a>
            <a href><i className="fas fa-phone me-2" /> +012 345 67890</a>
            <a href className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
            <div className="d-flex align-items-center">
              <i className="fas fa-share fa-2x text-white me-2" />
              <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
              <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
              <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
              <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Company</h4>
            <a href><i className="fas fa-angle-right me-2" /> About</a>
            <a href><i className="fas fa-angle-right me-2" /> Careers</a>
            <a href><i className="fas fa-angle-right me-2" /> Blog</a>
            <a href><i className="fas fa-angle-right me-2" /> Press</a>
            <a href><i className="fas fa-angle-right me-2" /> Gift Cards</a>
            <a href><i className="fas fa-angle-right me-2" /> Magazine</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Support</h4>
            <a href><i className="fas fa-angle-right me-2" /> Contact</a>
            <a href><i className="fas fa-angle-right me-2" /> Legal Notice</a>
            <a href><i className="fas fa-angle-right me-2" /> Privacy Policy</a>
            <a href><i className="fas fa-angle-right me-2" /> Terms and Conditions</a>
            <a href><i className="fas fa-angle-right me-2" /> Sitemap</a>
            <a href><i className="fas fa-angle-right me-2" /> Cookie policy</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item">
            <div className="row gy-3 gx-2 mb-4">
              <div className="col-xl-6">
                <form>
                  <div className="form-floating">
                    <select className="form-select bg-dark border" id="select1">
                      <option value={1}>Arabic</option>
                      <option value={2}>German</option>
                      <option value={3}>Greek</option>
                      <option value={3}>New York</option>
                    </select>
                    <label htmlFor="select1">English</label>
                  </div>
                </form>
              </div>
              <div className="col-xl-6">
                <form>
                  <div className="form-floating">
                    <select className="form-select bg-dark border" id="select1">
                      <option value={1}>USD</option>
                      <option value={2}>EUR</option>
                      <option value={3}>INR</option>
                      <option value={3}>GBP</option>
                    </select>
                    <label htmlFor="select1">$</label>
                  </div>
                </form>
              </div>
            </div>
            <h4 className="text-white mb-3">Payments</h4>
            <div className="footer-bank-card">
              <a href="#" className="text-white me-2"><i className="fab fa-cc-amex fa-2x" /></a>
              <a href="#" className="text-white me-2"><i className="fab fa-cc-visa fa-2x" /></a>
              <a href="#" className="text-white me-2"><i className="fas fa-credit-card fa-2x" /></a>
              <a href="#" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x" /></a>
              <a href="#" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x" /></a>
              <a href="#" className="text-white"><i className="fab fa-cc-discover fa-2x" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright text-body py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center text-md-end mb-md-0">
          <i className="fas fa-copyright me-2" /><a className="text-white" href="#">Your Site Name</a>, All right reserved.
        </div>
        <div className="col-md-6 text-center text-md-start">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i className="fa fa-arrow-up" /></a>
</div>

    </div>
  )
}

export default Footer
