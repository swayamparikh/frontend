import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Mybook from "./Website/Pages/Mybook";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Contactus from "./Website/Pages/Contactus";
import Addbook from "./Website/Pages/Addbook";

import Notfound from "./Website/Pages/Notfound";
import Browsebook from "./Website/Pages/Browsebook";
import Mycart from "./Website/Pages/Mycart";
import Login from "./Website/Pages/Login";
import Register from "./Website/Pages/Register";
import Ahome from "./Admin/Ahome";
import Managebook from "./Admin/Managebook";
import Manageuser from "./Admin/Manageuser";
import Alogin from "./Admin/Alogin";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mybooks" element={<Mybook />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/browse" element={<Browsebook />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<Notfound />} />

          {/* admin */}
          <Route path="/admin" element={<Ahome />} />
          <Route path="admin/managebook" element={<Managebook />} />
            <Route path="/admin/users" element={<Manageuser />} />
               <Route path="alogin" element={<Alogin/>} />
         
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
