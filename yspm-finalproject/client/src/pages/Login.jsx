import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Login = () => {
    const [form, setForm] = useState({
      email:"",
      password:"",
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
        const res = await API.post("/auth/login",form);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("user",JSON.stringify(res.data.user));
          alert("login successfull");
          navigate("/");
          window.location.reload();
        } catch(err) {
          console.error(err);
        }
    };

    return <>
        <div className='container mt-5'>
            <div className='card shadow p-4 col-md-6 mx-auto'>
                <h3 className='text-center mb-4'>Login</h3>
                <form onSubmit={hs}>
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
                    <button className='btn btn-dark btn-block'>
                        Login
                    </button>
                </form>
            </div>

        </div>

    </>
}

export default Login