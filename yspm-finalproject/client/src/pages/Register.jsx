import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Register = () => {
    const [form, setForm] = useState({
      name:"",
      email:"",
      password:"",
      role:"student",
    });
    
    const navigate = useNavigate();
    const hc = (e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value,
      });
    };

    const hs = async (e) => {
        e.preventDefault();
        try {
          await API.post("/auth/register",form);
          alert("register successfull");
          navigate("/login");
        } catch(err) {
          console.error(err);
        }
    };

    return <>
        <div className='container mt-5'>
            <div className='card shadow p-4 col-md-6 mx-auto'>
                <h3 className='text-center mb-4'>Add course</h3>
                <form onSubmit={hs}>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='enter name'
                        onChange={hc}
                        required

                    />
                    <br />
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        placeholder='enter email'
                        onChange={hc}
                        required

                    />
                    <br/>
                     <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder='enter password'
                        onChange={hc}
                        required

                    />
                    
                    <br/>
                     <label>Role</label>
                     <select name='role' className='form-control' onChange={hc}>
                     <option value="student">Student</option>
                     <option value="admin">Admin</option>
                     </select>
                     <br/>
                    <button className='btn btn-dark btn-block'>
                        Register
                    </button>
                </form>
            </div>

        </div>

    </>
}

export default Register