import React from 'react'

function Read() {
     const users = useSelector((state) => state.users.user)

    // console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showuser())
    }, [])

    
  return (
    <div className='container'>
         <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <button className='btn btn-info'>View</button>
                                        <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                        <button className='btn btn-danger' onClick={()=>dispatch(deleteuser(data.id))}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
    </div>
  )
}

export default Read
