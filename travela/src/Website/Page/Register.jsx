import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

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
    console.log(form);
  };

  const getregister = async (e) => {
    e.preventDefault();

    try {
      if (!form.email.trim() || !form.name.trim() || !form.password.trim()) {
        console.log('Please fill all required fields!');
        toast.error('Please fill all required fields!');
        return false;
      }

      const res = await axios.post('http://localhost:3000/user', form); // ✅ Ensure endpoint is correct: "users"
      console.log(res.data);

      setform({
        id: '',
        email: '',
        name: '',
        password: '',
        status: ''
      });

      redirect('/login');
      toast.success('Registered successfully!');
    } catch (error) {
      console.log('API data not found!', error);
      toast.error('API data not found!');
    }
  };

  return (
    <div>
      <form onSubmit={getregister}>
        <MDBContainer
          fluid
          className='d-flex align-items-center justify-content-center bg-image'
          style={{
            backgroundImage:
              'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'
          }}
        >
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>
              <h2 className='text-uppercase text-center mb-5'>Create an account</h2>

              <MDBInput name='name' value={form.name} onChange={getchange} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
              <MDBInput name='email' value={form.email} onChange={getchange} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
              <MDBInput name='password' value={form.password} onChange={getchange} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
              </div>

              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
}

export default Register;
