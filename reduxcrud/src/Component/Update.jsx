import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slicedata/userslice'

function Update() {

    const redirect = useNavigate()

    const { id } = useParams()
    console.log(id)

    const [updatedata, setupdatadata] = useState([])

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.users)

    useEffect(()=>{

        const singleuser = user.filter((data)=> data.id === id)
        console.log(singleuser[0])
        setupdatadata(singleuser[0])

    },[])

    console.log(user)

    const getchange =(e)=>{
        setupdatadata({
            ...updatedata,
            [e.target.name]:e.target.value
        })
        console.log(updatedata)
    }
    const getupdate=(e)=>{
        e.preventDefault();

        dispatch(updateuser(updatedata))
        redirect("/")
    
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>hello this Form data Update</h1>
                        <form action="" onSubmit={getupdate}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Name </label>
                                    <input type="text" onChange={getchange} value={updatedata && updatedata.name} name='name' className="form-control" id="exampleFormControlInput2" placeholder="your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" onChange={getchange} value={updatedata && updatedata.email} name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">your password</label>
                                    <input type="password"  onChange={getchange} value={updatedata && updatedata.password} name='password' className="form-control" id="exampleFormControlInput3" placeholder="your password" />
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

export default Update