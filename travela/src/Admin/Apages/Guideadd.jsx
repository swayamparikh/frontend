import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Asidebars from '../AComan/Asidebars';
import Amains from '../AComan/Amains';

function GuidesAdd() {
    const redirect = useNavigate();

    const [form, setForm] = useState({
        id: "",
        name: "",
        Designation: "",
        img: ""
    });

    // Handle input change
    const getChange = (e) => {
        setForm({
            ...form,
            id: new Date().getTime().toString(), // Generate unique ID
            [e.target.name]: e.target.value
        });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.Designation || !form.img) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await axios.post("http://localhost:3000/guies", form);
            redirect("/guidesmanage");
            setForm({
                id: "",
                name: "",
                Designation: "",
                img: ""
            });
        } catch (error) {
            console.error("Error adding guide:", error);
        }
    };

    return (
        <div className="bg-breadcrumb">
            <Asidebars />
            <Amains />

            <div className="container admin-main">
                <h3 className="text-white mb-5 text-center">Add Guide Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating text-dark">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={getChange}
                                    className="form-control border-0"
                                    id="name"
                                    placeholder="Guide Name"
                                />
                                <label htmlFor="name">Guide Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating text-dark">
                                <input
                                    type="text"
                                    name="Designation"
                                    value={form.Designation}
                                    onChange={getChange}
                                    className="form-control border-0"
                                    id="Designation"
                                    placeholder="Designation"
                                />
                                <label htmlFor="Designation">Designation</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating text-dark">
                                <input
                                    type="url"
                                    name="img"
                                    value={form.img}
                                    onChange={getChange}
                                    className="form-control border-0"
                                    id="img"
                                    placeholder="Image URL"
                                />
                                <label htmlFor="img">Guide Image URL</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">
                                Add Guide
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GuidesAdd;
