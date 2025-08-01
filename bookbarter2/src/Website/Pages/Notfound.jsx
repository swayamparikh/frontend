import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
  return (
    <div>
       <div>
                {/* 404 Start */}
                <div className="container-fluid py-5" style={{ background: 'linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))', objectFit: 'cover' }}>
                    <div className="container py-5 text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <i className="bi bi-exclamation-triangle display-1 text-primary" />
                                <h1 className="display-1">404</h1>
                                <h1 className="mb-4 text-dark">Page Not Found</h1>
                                <p className="mb-4 text-dark">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                                <NavLink className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404 End */}
               
            </div>
    </div>
  )
}

export default Notfound
