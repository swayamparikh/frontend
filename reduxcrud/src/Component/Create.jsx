import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { creatuser } from '../Slicedata/userslice'
import { useNavigate } from 'react-router-dom'

function Create() {

  const redirect =useNavigate()

  const [form,setform]= useState({
    id:"",
    name:"",
    email:"",
    password:""
  })

  const getchange=(e)=>{
    setform({
      ...form,
      id:new Date().getTime().toString(),
      [e.target.name]:e.target.value
    })
    // console.log(form)
  }

  const dispatch = useDispatch()

  const getsubmit=(e)=>{
    e.preventDefault();
    dispatch(creatuser(form))
    redirect("/")
    setform({
       id:"",
    name:"",
    email:"",
    password:""
    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1>hello this Form data add</h1>
            <form action="" onSubmit={getsubmit}>
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput2" className="form-label">Name </label>
                  <input type="text" value={form.name} onChange={getchange} name='name' className="form-control" id="exampleFormControlInput2" placeholder="your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" value={form.email} onChange={getchange} name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput3" className="form-label">your password</label>
                  <input type="password" value={form.password} onChange={getchange} name='password' className="form-control" id="exampleFormControlInput3" placeholder="your password" />
                </div>
                <div className="mb-3">

                  <input type="submit" />
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Create