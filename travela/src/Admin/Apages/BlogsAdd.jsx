import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Ahome from '../AComan/Asidebars'
import Asidebars from '../AComan/Asidebars'
import Amains from '../AComan/Amains'

function BlogsAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        posted: "",
        desc: "",
        date: "",
        img: ""
    })

    // form hadling
    const getchange = (e) => {
        setform({
            ...form,
            // new id create
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const handlesubmit = async (e) => {
        e.preventDefault()

        // if(form.name == ""){

        // }

        const res = await axios.post("http://localhost:3000/blogs", form)
        console.log(res.data)
        redirect("/blogmanage")
        setform({
            id: "",
            name: "",
            posted: "",
            desc: "",
            date: "",
            img: ""
        })
    }

    return (
        <div className='bg-breadcrumb admin-main'>

        <Asidebars/>
            <div className="container ">
                <h3 className="text-white mb-5 text-center">Blogs Add Data Form</h3>

                <form onSubmit={handlesubmit}>
                    <div className="row g-3">
                        <div className="col-md-6 me-5">
                            <div className="form-floating text-dark">
                                <input type="text" value={form.name} name='name' onChange={getchange} className="form-control border-0" id="name" placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6 me-5 text-dark">
                            <div className="form-floating">
                                <input type="text" value={form.posted} name='posted' onChange={getchange} className="form-control border-0" id="posted" placeholder="Your posted" />
                                <label htmlFor="posted">Your posted</label>
                            </div>
                        </div>
                        <div className="col-md-6 me-5 ">
                            <div className="form-floating text-dark">
                                <input type="date" value={form.date} name='date' onChange={getchange} className="form-control border-0" id="date" placeholder="your Images" />
                                <label htmlFor="date">your date</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating text-dark">
                                <input type="url" value={form.img} name='img' onChange={getchange} className="form-control border-0" id="image" placeholder="your Images" />
                                <label htmlFor="image">your Images</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating text-dark">
                                <textarea value={form.desc} name='desc' onChange={getchange} className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                <label htmlFor="message">Message Desc</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Blog add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BlogsAdd