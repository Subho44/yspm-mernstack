import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import API from '../api/api';

const Courselist = () => {
  const[courses,setCourses] = useState([]);

  //get courses
  const getcourses = async()=>{
    const res = await API.get("/courses");
    setCourses(res.data);
  };
  //delete course
   const deletecourses = async(id)=>{
    await API.delete(`/courses/${id}`);
    setCourses(res.data);
    getcourses();
  };
  //fetch all courses

  useEffect(()=>{
    getcourses();
  },[]);


  return <>
  <div className='container mt-5'>
    <h2 className='mb-4 text-center'>All Courses</h2>
    <div className='row'>
      {courses.map(x=>(
        <div className='col-md-4 mb-4' key={x._id}>
          <div className='card shadow h-100'>
            {x.image && (
              <img 
              src={`http://localhost:5600/uploads/${x.image}`}
              className='card-img-top' 
              alt='img'
              style={{height:"200px", objectFit:"cover"}}
              />
            )}
           <div className='card-body'>
              <h5 className='card-title'>{x.title}</h5>
              <p className='card-text'>Price:₹{x.price}</p>
              <Link to={`/course/${x._id}`} className='btn btn-info btn-sm mr-2'>
               View
              </Link>
              <button className='btn btn-danger btn-sm' onClick={()=>deletecourses(x._id)}>
               Delete
              </button>
            </div>
          </div>  
        </div>  
      ))}
    </div>

  </div>
  
  
  </>
}

export default Courselist