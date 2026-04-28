import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Addcourse = () => {
    const [title, setTile] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const hs = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("image", image);
        await API.post("/courses", formData);
        alert("courses added sucessfully");
        navigate("/");
    };

    return <>
        <div className='container mt-5'>
            <div className='card shadow p-4 col-md-6 mx-auto'>
                <h3 className='text-center mb-4'>Add course</h3>
                <form onSubmit={hs}>
                    <label>Course Title</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='enter course name'
                        value={title}
                        onChange={(e) => setTile(e.target.value)}
                        required

                    />
                    <label>Course Price</label>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='enter price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required

                    />
                    <br />
                    <label>Course Image</label>
                    <input
                        type='file'
                        className='form-control'
                        onChange={(e) => setImage(e.target.files[0])}
                        required

                    />
                    <br/>
                    <button className='btn btn-dark btn-block'>
                        Add Course
                    </button>
                </form>
            </div>

        </div>

    </>
}

export default Addcourse