import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Addcourse from "./pages/Addcourse";
import Coursedetails from "./pages/Coursedetails";
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
      </Routes>

    <Footer/>
    </BrowserRouter>

  </>
}
export default App;