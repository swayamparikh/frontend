import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Asidebars from '../AComan/Asidebars';
import Amains from '../AComan/Amains';

function Guidesmanage() {
    const [guide, setguide] = useState([]);
    const [guideData, setGuideData] = useState(null); // For view modal
    const [updateModal, setUpdateModal] = useState(false); // For edit modal

    const [updatedata, setupdatedata] = useState({
        id: '',
        name: '',
        Designation: '',
        img: ''
    });

    // Fetch all data
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const res = await axios.get('http://localhost:3000/guies');
        setguide(res.data);
    };

    // View data
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/guies/${id}`);
        setGuideData(res.data);
    };

    // Delete
    const removedata = async (id) => {
        await axios.delete(`http://localhost:3000/guies/${id}`);
        fetchdata();
    };

    // Edit setup
    const editdata = (data) => {
        setupdatedata(data);
        setUpdateModal(true);
    };

    const handleChange = (e) => {
        setupdatedata({
            ...updatedata,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/guies/${updatedata.id}`, updatedata);
        setUpdateModal(false);
        fetchdata();
    };

    return (
        <div>
            <Asidebars />
            <Amains />
            <div className="container admin-main" style={{ paddingLeft: '15%' }}>
                <h1 className="text-center">Guide Management</h1>
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th>#id</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guide.map((data, index) => (
                            <tr className="text-center" key={index}>
                                <th>{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.Designation}</td>
                                <td>
                                    <img src={data.img} style={{ height: '50px', width: '50px' }} alt="" />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewModal"
                                        onClick={() => getdata(data.id)}
                                    >
                                        View
                                    </button>
                                    <button
                                        className="btn btn-success mx-2"
                                        onClick={() => editdata(data)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removedata(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* View Modal */}
                <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">View Guide</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body text-center">
                                {guideData && (
                                    <>
                                        <img src={guideData.img} alt="guide" className="img-fluid rounded" style={{ height: '200px' }} />
                                        <h4 className="mt-3">{guideData.name}</h4>
                                        <p>{guideData.Designation}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Modal */}
                {updateModal && (
                    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: '#00000066' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form onSubmit={handleUpdate}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">Edit Guide</h5>
                                        <button type="button" className="btn-close" onClick={() => setUpdateModal(false)}></button>
                                    </div>
                                    <div className="modal-body">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            name="name"
                                            value={updatedata.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                        />
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            name="Designation"
                                            value={updatedata.Designation}
                                            onChange={handleChange}
                                            placeholder="Designation"
                                        />
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            name="img"
                                            value={updatedata.img}
                                            onChange={handleChange}
                                            placeholder="Image URL"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => setUpdateModal(false)}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Guidesmanage;
