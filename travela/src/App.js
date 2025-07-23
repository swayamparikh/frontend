import React from "react";
import Homee from "./Website/Page/Homee";
import About from "./Website/Page/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Website/Page/Services";
import Packages from "./Website/Page/Packages";
import Blog from "./Website/Page/Blog";
import Contact from "./Website/Page/Contact";
import Destination from "./Website/Page/Destination";
import Notfound from "./Website/Page/Notfound";
import Testimonial from "./Website/Page/Testimonial";
import Travelguides from "./Website/Page/Travelguides";
import Ourgallery from "./Website/Page/Ourgallery";
import Travelbooking from "./Website/Page/Travelbooking";
import Exploretour from "./Website/Page/Exploretour";
import Dashboard from "./Admin/Apages/Dashboard";
import Guidesmanage from "./Admin/Apages/Guidesmanage";
import BlogsAdd from "./Admin/Apages/BlogsAdd";
import Blogmanage from "./Admin/Apages/Blogmanage";
import GuidesAdd from "./Admin/Apages/Guideadd";
import Alogin from "./Admin/Apages/Alogin";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./Website/Page/Login";
import Register from "./Website/Page/Register";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
          {/* <Route path="/notfound" element={<Notfound/>} /> */}
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/travelguides" element={<Travelguides />} />
          <Route path="/ourgallery" element={<Ourgallery />} />
          <Route path="/travelbooking" element={<Travelbooking />} />
          <Route path="/exploretours" element={<Exploretour />} />

          {/* Not found */}
          <Route path="*" element={<Notfound />} />


          {/* Admin side */}

          <Route path="/dash" element={<Dashboard />} />
          <Route path="/guidesmanage" element={<Guidesmanage />} />
          <Route path="blogsadd" element={<BlogsAdd />} />
          <Route path="blogmanage" element={<Blogmanage />} />
          <Route path="guideadd" element={<GuidesAdd />} />
          <Route path="alogin" element={<Alogin />} />
          <Route path="login" element={<Login />} />
           <Route path="register" element={<Register/>} />






        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
