import React,{useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom"
import API from '../api/api';

const Coursedetails = () => {
  const {id} = useParams();
  const[course,setCourses] = useState(null);
  

  //get courses
  const getsingelcourses = async()=>{
    const res = await API.get("/courses");
    const singel = res.data.find(x=>x._id === id);
    setCourses(singel);
  };

  //fetch all courses

  useEffect(()=>{
    getsingelcourses();
  },[id]);


  return <>
  <div className='container mt-5'>
    <h2 className='mb-4 text-center'>All Courses</h2>
    <div className='row'>
      
        <div className='col-md-4 mb-4'>
          <div className='card shadow h-100'>
           <div className='card-body'>
              <h5 className='card-title'>{course.title}</h5>
              <p className='card-text'>Price:₹{course.price}</p>
              <Link to="/" className='btn btn-primary btn-sm mr-2'>
              Back
              </Link>
            </div>
          </div>  
        </div>  
     
    </div>

  </div>
  
  
  </>
}

export default Coursedetails;