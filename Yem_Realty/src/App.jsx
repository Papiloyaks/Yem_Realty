import { Link, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import logo from '../src/images/ylogo.png'
import Landing from "./pages/Landing";
import Upbar from "./components/Upbar";
import Map from "./pages/Map";
import Carousel from "./pages/Carousel";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Estates from "./pages/Estates";
import JoinUs from "./pages/JoinUs";
import AdminSignUp from "./pages/AdminSignUp";
import Steppers from "./components/Steppers";
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import AdminSignIn from "./pages/AdminSignIn";
import Contact from "./pages/Contact";
import Client from "./pages/Client";
import TermsAndConditionx from "./pages/TermsAndConditionx";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import FirstBlog from "./pages/FirstBlog";
import SecondBlog from "./pages/SecondBlog";
import ThirdBlog from "./pages/ThirdBlog";
import FourthBlog from "./pages/FourthBlog";
import FifthBlog from "./pages/FifthBlog";
import SixthBlog from "./pages/SixthBlog";
import Help from "./pages/Help";
import Request from "./pages/Request";
import ClientSignIn from "./pages/ClientSignIn";
// import Na from "./pages/Na";



function App() {
  const currentIndex = useSelector((state) => state.adminReducer.adminSign.currentStep)
  // console.log(currentIndex);

  const [isOpen, setIsOpen] = useState(false)
  const [isSectionVisible, setSectionVisibility] = useState(false);

  const location = useLocation()
  // const [isOpen, setIsOpen] = useState(false);
  const hiddenRoutes = ['/joinus','/admin','/client/signup','*/']
  // const isHidden = hiddenRoutes.includes(location.pathname);
  const isHidden = hiddenRoutes.some(route => location.pathname.startsWith(route));
  

  const toggleIsOpen = () => {
    setIsOpen(true)
    // console.log(isOpen);
  }
  const handleClick = () => {
    setIsOpen(false)
  };

  const handleBodyClick = () => {
    setSectionVisibility(!isSectionVisible)
  };
  

  return (
    <>
    <div className="font-[Quicksand] lg:mx-0 sm:mx-0 " onClick={handleBodyClick}>
    <Navbar isSectionVisible={isSectionVisible}/>
    <div className={isOpen?'block fixed w-full': 'hidden'}><Upbar onClickHandler={handleClick} /></div>
    {isHidden ? null :<ul className='md:hidden shadow px-5 flex justify-between '>
          <li><Link to="/"><img src={logo} width={40} className='h-[40px] my-2' alt="" /></Link></li>
          <li className='text-black my-6'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>}
    {/* <div><Upbar/></div> */}
      <Routes>
        <Route path="/"  element={<Landing/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
        <Route path="*"  element={<Error/>}/>
        <Route path='/estates' element={<Estates/>}/>
        <Route path="/joinus"  element={<JoinUs/>}/>
        {/* <Route path="adminsignup" element={<AdminSignUp/>}/> */}
        <Route path="adminsignin"  element={<AdminSignIn/>}/>
        <Route path="/admin/signup"  element={<Steppers currentIndex={currentIndex}/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/client/signup"  element={<Client/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditionx/>}/>
        <Route path="/privacy"  element={<Privacy/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/blog/The-Ultimate-Guide-to-Buying-Real-Estate" element={<FirstBlog/>}/>
        <Route path="/blog/4-sure-ways-to-invest-in-real-estate-even-if-you-don’t-have-millions"   element={<SecondBlog/>}/>
        <Route path="/blog/industrial-real-estate-offers-hope-with-12-annual-yield" element={<ThirdBlog/>}/>
        <Route path="/blog/2022-outlook:-experts-optimistic,-predict-29-real-estate-growth"  element={<FourthBlog/>}/>
        <Route path="/blog/5-reasons-Ibadan-is-a-great-investment-destination" element={<FifthBlog/>}/>
        <Route path="/blog/use-these-5-ways-to-invest-in-real-estate-properly"  element={<SixthBlog/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/clientsignin"  element={<ClientSignIn/>}/>
        {/* <Route path="/card"  element={<Carousel/>}/> */}
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
