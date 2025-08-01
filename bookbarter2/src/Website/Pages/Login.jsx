import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';

function Login() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Uid")) {
      redirect("/about");
    }
  }, []);

  const [form, setform] = useState({
    email: "",
    password: ""
  });

  const getchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const getsubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;

      if (!email.trim() || !password.trim()) {
        toast.error("Please fill in all required fields!");
        return;
      }

      const res = await axios.get(`http://localhost:3000/user?email=${email}`);
      if (res.data.length === 0) {
        toast.error("Email does not match!");
        return;
      }

      const user = res.data[0];
      if (user.password !== password) {
        toast.error("Password does not match!");
        return;
      }

      localStorage.setItem("Uid", user.id);
      localStorage.setItem("Uname", user.name);
      toast.success("Login successful!");
      redirect("/about");

    } catch (error) {
      console.error("API error:", error);
      toast.error("API error occurred!");
    }
  };

  return (
    <>
   
      <ToastContainer position="top-center" />
      <MDBContainer className='my-5'>

        <MDBCard className='shadow-lg' style={{ borderRadius: '1rem', overflow: 'hidden' }}>

          <MDBRow className='g-0'>

            <MDBCol md='6' className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#c8e6c9' }}>
              <div className='text-center p-4'>
                <img
                  src='https://tse1.mm.bing.net/th/id/OIP.s6qkxOqsGKB_7JnvbKujWAHaE2?rs=1&pid=ImgDetMain&o=7&rm=3' // Or your local image
                  alt="Bird illustration"
                  className='img-fluid mb-4'
                  style={{ maxHeight: '300px' }}
                />
                <h5 className='fw-bold'></h5>
                <p className='text-muted'></p>
              </div>
            </MDBCol>

            <MDBCol md='6'>
              <form onSubmit={getsubmit}>
                <MDBCardBody className='d-flex flex-column justify-content-center'>

                  <h3 className="text-center mb-4 fw-bold">Welcome to Bookbarter</h3>

                  <MDBInput
                    name='email'
                    onChange={getchange}
                    value={form.email}
                    wrapperClass='mb-3'
                    label='Email address'
                    id='email'
                    type='email'
                    size="lg"
                  />

                  <MDBInput
                    name='password'
                    onChange={getchange}
                    value={form.password}
                    wrapperClass='mb-4'
                    label='Password'
                    id='password'
                    type='password'
                    size="lg"
                  />

                  <div className="text-end mb-3">
                    <a href="#!" className="text-muted" style={{ fontSize: '0.9rem' }}>Forgot password?</a>
                  </div>

                  <MDBBtn type="submit" className="w-100 mb-3" size="lg" style={{ backgroundColor: '#4e342e' }}>
                    Sign in
                  </MDBBtn>

                  <div className="text-center">
                    <p className="mb-0"> <NavLink to="/register">Create Account</NavLink></p>
                  </div>

                </MDBCardBody>
              </form>
            </MDBCol>

          </MDBRow>
        </MDBCard>
      </MDBContainer>
     
    </>
  );
}

export default Login;
