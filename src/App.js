import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import "./assets/css/Button.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [mobileView, setMobileView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollState, setScrollState] = useState(false);
  const navigate = useNavigate();

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    if (windowWidth <= 576) {
      setMobileView(true)
    }
    else {
      setMobileView(false)
    };
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        setScrollState(true);
      }
      else {
        setScrollState(false);
      }
    })

    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
      }
    
  }, [windowWidth]);

  useEffect(()=>{
    handleScrollTop();
    const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
    if (path) {
      navigate(path);
    }
  },[navigate])

  window.addEventListener("load", updateWindowDimensions)
  return (
    <>
      {
        scrollState && <button
          type="button"
          className='scrollTopBtn'
          id="btn-back-to-top"
          onClick={handleScrollTop} >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#fff" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </button>
      }
      <ToastContainer limit={1}/>
        <Navbar props={mobileView} handleScrollTop = {handleScrollTop} />
        <Routes>
          <Route path='/' element={<Home props={mobileView} />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/termsOfService' element={<TermsOfService />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
