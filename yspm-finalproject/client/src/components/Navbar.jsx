import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">E-learning</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/feature">Features</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          {
            user?.role === "admin" && (
              <li class="nav-item">
                <Link class="nav-link" to="/add">Add Course</Link>
              </li>
            )
          }
          {
            !user ? (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">Register</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>

              </>
            ):(
              <>
              <span className='nav-link text-warning'>
              {user.name} ({user.role})
              </span>
              <button className='btn btn-danger btn-sm' onClick={logout}>Logout</button>
              </>
            )
      }


        </ul>
      </div>
    </nav>

  </>
}

export default Navbar