import React, { useState } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: '',
    email: '',
    name: '',
    password: '',
    status: ''
  });

  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      status: 'unblock',
      [e.target.name]: e.target.value
    });
  };

  const getregister = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.name.trim() || !form.password.trim()) {
      toast.error('Please fill all required fields!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/user', form);
      setform({
        id: '',
        email: '',
        name: '',
        password: '',
        status: ''
      });
      toast.success('Registered successfully!');
      redirect('/login');
    } catch (error) {
      toast.error('API data not found!');
    }
  };

  return (
    <MDBContainer fluid className="p-4" style={{ height: '100vh' }}>
      <MDBRow>
        {/* Left Panel */}
        <MDBCol
          md="6"
          className="d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
            borderRadius: '20px 0 0 20px'
          }}
        >
          <h1 className="mb-4">Welcome Back!</h1>
          <p className="text-center px-5">
            To keep connected with us please login with your personal info
          </p>
          <MDBBtn
            outline
            className="mt-4 text-white border-white"
            onClick={() => redirect('/login')}
          >
            SIGN IN
          </MDBBtn>
        </MDBCol>

        {/* Right Panel - Register Form */}
        <MDBCol md="6" className="d-flex align-items-center justify-content-center bg-white">
          <form onSubmit={getregister} style={{ width: '80%', maxWidth: '400px' }}>
            <h2 className="text-center fw-bold mb-4">Create Account</h2>

            {/* Social Buttons */}
            <div className="d-flex justify-content-center mb-3">
              <MDBBtn color="light" className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn color="light" className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn color="light" className="mx-1">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>

            <p className="text-center text-muted">or use your email for registration:</p>

            <MDBInput
              name="name"
              value={form.name}
              onChange={getchange}
              label="Name"
              type="text"
              className="mb-3"
            />

            <MDBInput
              name="email"
              value={form.email}
              onChange={getchange}
              label="Email"
              type="email"
              className="mb-3"
            />

            <MDBInput
              name="password"
              value={form.password}
              onChange={getchange}
              label="Password"
              type="password"
              className="mb-4"
            />

            <MDBBtn type="submit" className="w-100" style={{ background: '#00b09b' }}>
              SIGN UP
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
