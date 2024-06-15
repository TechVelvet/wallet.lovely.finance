import React from 'react'
import logo from "../assets/images/logo.png"
import "../assets/css/Navbar.css";
import DownloadSvg from '../assets/images/Download.svg'
import { useNavigate } from 'react-router-dom';
import SelectLang from './SelectLang';

const Navbar = ({handleScrollTop}) => {  

  const Navigate = useNavigate();
  

  return (
    <>
      <div className="main-container-navbar">
        <div className="navbar-container">
          <div className="left-navbar" onClick={()=> {Navigate("/"); handleScrollTop()}}>
            <img src={logo} alt="error-logo" className='' />
            <p>LOVELY<span>WALLET</span></p>
          </div>
          <div className="right-navbar">
            <div className='Language'>
              <SelectLang />
            </div>
            <a href='https://play.google.com/store/apps/details?id=com.lovely_wallet_2&hl=en&gl=US' target='_blank' rel="noreferrer">
              <button className='btn btn-mobile'><img src={DownloadSvg} alt="" /></button>
              <button className='download-app-btn btn'>
                <img src={DownloadSvg} alt="" />DOWNLOAD</button>
            </a>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Navbar
