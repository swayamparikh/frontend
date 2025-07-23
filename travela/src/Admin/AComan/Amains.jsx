import React from 'react'

function Amains({Aname}) {
  return (
    <div>
       <div>
            <main className="admin-main bg-breadcrumb py-5">
                <div className="container">
                    <div className="position-relative rounded-pill w-100 mx-auto p-3" style={{ background: 'rgba(19, 53, 123, 0.8)' }}>
                        <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                        <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: 46, transform: 'translateY(-50%)' }}>Search</button>
                    </div>
                </div>
                <h1>Welcome to the Website</h1>
                <p>This is the {Aname}.</p>
                <p>hello main page</p>
            </main>
        </div>
    </div>
  )
}

export default Amains
