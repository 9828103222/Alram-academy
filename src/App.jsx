
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
import DigitalMarketingInfo from './Component/course pages/DigitalMarketingInfo.jsx'
import EcommerceInfo from './Component/course pages/EcommerceInfo.jsx'
import WebDevelopmentInfo from './Component/course pages/WebDevelopmentInfo.jsx'
// import { useEffect } from "react";
import Cursor from "./Component/Cursor.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import OurTeams from './Component/Pages/OurTeams.jsx'
import PrivacyPolicy from './Component/Pages/PrivacyPolicy.jsx'
import AdminLogin from './AdminPannel/AdminLogin.jsx'
import Dashboard from './AdminPannel/Dashboard.jsx'
import { useLocation } from "react-router-dom";
import Leads from "./AdminPannel/Leads.jsx";
import TodayLeads from './AdminPannel/TodayLeads.jsx'




function App() {


  const location = useLocation();
 const hideLayout =
  location.pathname === "/admin-login" ||
  location.pathname === "/dashboard" ||
  location.pathname === "/leads" ||
  location.pathname === "/today-leads";


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
    <ScrollToTop />
     <Cursor />  
  {!hideLayout && <Navbar />}

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
  <Route path='/about' element={<About />} />
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/reviews' element={<Reviews/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/ourteams' element={<OurTeams/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/ourteam' element={<OurTeams/>}/>
    <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
    <Route path="/admin-login" element={<AdminLogin/>} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/leads" element={<Leads />} />
    <Route path="/today-leads" element={<TodayLeads />} />

  </Routes>
  
 {!hideLayout && <Footer />}
    </>
  )
}

export default App
