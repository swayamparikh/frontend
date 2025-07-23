import React, { useEffect } from 'react';
import './AdminSidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Asidebars = () => {

        const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })
     const logout=()=>{
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/alogin")
        toast.success("Admin logout Successs..")
    }
    return (
        <div>
            <div className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>hello sidebar</h2>
                </div>
                
                <nav className="sidebar-menu ">
                    <NavLink to="/adminhome" className="nav-item nav-link">🏠Home</NavLink>
                    <NavLink to="/dash" className="nav-item nav-link"> Dashboard</NavLink>
                    <a href="/admin/users">👥 About</a>
                    <a href="/admin/reports">📊 Service</a>
                    <div className="nav-item  dropdown dropend " >
                        <div className="nav-link dropdown-toggle " style={{ color: "white" }} data-bs-toggle="dropdown" role="button" aria-expanded="false">
                             Blog
                        </div>
                        <div className="dropdown-menu">
                            <NavLink to="/blogmanage" className="dropdown-item" id='end-item'>Blog Manage</NavLink>
                            <NavLink to="/blogsadd" className="dropdown-item" id='end-item'>Blog Add</NavLink>
                        </div>
                    </div>

                    <NavLink to="/packages">🚪 Packages</NavLink>
                    <div className="nav-item dropdown dropend">
                        <div className="nav-link dropdown-toggle " style={{ color: "white" }} data-bs-toggle="dropdown" role="button" aria-expanded="false">Pages</div>
                        <div className="dropdown-menu">
                            {/* <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
                            <NavLink to="/tour" className="dropdown-item">Explore Tour</NavLink>
                            <NavLink to="/booking" className="dropdown-item">Travel Booking</NavLink>
                            <NavLink to="/gallery" className="dropdown-item">Our Gallery</NavLink> */}
                            <NavLink to="/guidesmanage" className="dropdown-item" id='end-item'>Travel Guides</NavLink>
                             <NavLink to="/guideadd" className="dropdown-item" id='end-item'>Guideadd</NavLink>

                            {/* <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink> */}
                        </div>
                    </div>
                    
                                 {
                                    (()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <>
                                                 <NavLink onClick={logout} className="nav-item nav-link">Alogout</NavLink>
                                                </>
                                            )
                                        }
                                        else{
                                            return(
                                                <>
                                                 <NavLink to="/alogin" className="nav-item nav-link">Alogin</NavLink>
                                                </>
                                            )
                                        }
                                    })()
                                 }

                </nav>
                <div className="sidebar-footer">
                    <p>Logged in as: <strong>Admin</strong></p>
                    <p>Status: <span className="online-dot"></span> Online</p>
                </div>


            </div>
        </div>
    );
};



export default Asidebars