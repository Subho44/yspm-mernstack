import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCourseDetails = async () => {
    try {
      const res = await API.get(`/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.log(err);
      setCourse(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, [id]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (!course) {
    return <h3 className="text-center mt-5">Course Not Found</h3>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">
        {course.image && (
              <img 
              src={`http://localhost:5600/uploads/${course.image}`}
              className='img-fluid mb-3' 
              alt='img'
              style={{height:"300px", objectFit:"cover"}}
              />
            )}
        <h2 className="text-primary">{course.title}</h2>
        <h4>Price: ₹{course.price}</h4>

        <Link to="/" className="btn btn-dark mt-3">
          Back to Courses
        </Link>
      </div>
    </div>
  );
}

export default CourseDetails;