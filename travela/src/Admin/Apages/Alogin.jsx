import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Alogin() {
    const redirect = useNavigate()


    useEffect(() => {
        if (localStorage.getItem("Aid")) {
            redirect("/dash")
        }
    }, [])

    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

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

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`);
            if (res.data.length === 0) {
                toast.error("Email does not match!");
                return;
            }

            const admin = res.data[0];
            if (admin.password !== password) {
                toast.error("Password does not match!");
                return;
            }

            localStorage.setItem("Aid", admin.id);
            localStorage.setItem("Aname", admin.name);
            redirect("/dash")
            toast.success("Login successful!");
            navigate("/dash");

        } catch (error) {
            console.error("API error:", error);
            toast.error("API data not found!");
        }
    };

    return (
        <div>
            <MDBContainer fluid>
                <MDBRow>
                    <form onSubmit={getsubmit}>
                        <MDBCol sm='6'>
                            <div className='d-flex flex-row ps-5 pt-5'>
                                <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                                <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                                <MDBInput
                                    name='email'
                                    onChange={getchange}
                                    value={form.email}
                                    wrapperClass='mb-4 mx-5 w-100'
                                    label='Email address'
                                    id='formControlLg'
                                    type='email'
                                    size="lg"
                                />
                                <MDBInput
                                    name='password'
                                    onChange={getchange}
                                    value={form.password}
                                    wrapperClass='mb-4 mx-5 w-100'
                                    label='Password'
                                    id='formControlLg'
                                    type='password'
                                    size="lg"
                                />

                                <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
                                <p className="small mb-5 pb-lg-3 ms-5">
                                    <a className="text-muted" href="#!">Forgot password?</a>
                                </p>
                                <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
                            </div>
                        </MDBCol>

                        <MDBCol sm='6' className='d-none d-sm-block px-0'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                alt="Login"
                                className="w-100"
                                style={{ objectFit: 'cover', objectPosition: 'left' }}
                            />
                        </MDBCol>
                    </form>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Alogin;
