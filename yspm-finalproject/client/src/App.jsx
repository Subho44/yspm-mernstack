import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Addcourse from "./pages/Addcourse";
import Coursedetails from "./pages/Coursedetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
const App = () => {

  return <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/feature" element={<Feature />}></Route>
         <Route path="/add" element={<Addcourse />}></Route>
          <Route path="/course/:id" element={<Coursedetails />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>

    <Footer/>
    </BrowserRouter>

  </>
}
export default App;