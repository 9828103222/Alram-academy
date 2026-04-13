
import './App.css'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Pages/Home.jsx'
import About from "./Component/Pages/About.jsx"
import Courses from "./Component/Pages/Courses.jsx"
import Portfolio from "./Component/Pages/Portfolio.jsx"
import Contact from "./Component/Pages/Contact.jsx"
import CoursesProps from './Component/Props/Coursesprops.jsx';
import Reviews from './Component/Pages/Reviews.jsx'
import ReviewsProps from './Component/Props/ReviewsProps.jsx'
import Footer from './Component/Footer.jsx'
// import { useEffect } from "react";



function App() {


  //   useEffect(() => {
  //   const handleContextMenu = (e) => e.preventDefault();

  //   const handleKeyDown = (e) => {
  //     if (e.key === "F12") e.preventDefault();
  //     if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
  //     if (e.ctrlKey && e.shiftKey && e.key === "B") e.preventDefault();
  //     if (e.ctrlKey && e.shiftKey && e.key === "J") e.preventDefault();
  //     if (e.ctrlKey && e.shiftKey && e.key === "j") e.preventDefault();
  //     if (e.ctrlKey && e.shiftKey && e.key === "C") e.preventDefault();
  //     if (e.ctrlKey && e.shiftKey && e.key === "c") e.preventDefault();
      
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);


  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);



  return (
    <>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home/>} />
  <Route path='/about' element={<About />} />
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/reviews' element={<Reviews/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Routes>
  <Footer/>
    </>
  )
}

export default App
