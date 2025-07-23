import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

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

      const res = await axios.get(`http://localhost:3000/user?email=${email}`); // ✅ Fixed: /users (not /user)
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
      toast.error("API data not found!");
    }
  };

  return (
    <div>
      <MDBContainer className='my-5'>
        <MDBCard>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>
              <form onSubmit={getsubmit}>
                <MDBCardBody>

                  <MDBInput name='email' onChange={getchange} value={form.email} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                  <MDBInput name='password' onChange={getchange} value={form.password} wrapperClass='mb-4' label='Password' id='form2' type='password' />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="#!">Forgot password?</a> {/* ✅ Corrected href to "#!" */}
                  </div>

                  <MDBBtn className="mb-4 w-100" type="submit">Sign in</MDBBtn>
                      <h6>Create <NavLink to="/register" >New Account</NavLink> </h6>


                </MDBCardBody>
              </form>
            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
