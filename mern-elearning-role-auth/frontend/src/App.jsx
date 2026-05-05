import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddCourse from "./pages/AddCourse";
import CourseDetails from "./pages/CourseDetails";
function App(){ return <BrowserRouter><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/register" element={<Register/>}/><Route path="/login" element={<Login/>}/><Route path="/add" element={<AddCourse/>}/><Route path="/course/:id" element={<CourseDetails/>}/></Routes><footer className="text-center p-3 mt-5">created website @2026_raj</footer></BrowserRouter> }
export default App;
