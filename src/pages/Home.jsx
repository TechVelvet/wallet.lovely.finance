import React from "react";
import "../assets/css/Home.css";
import logo from '../assets/images/logoLarge.svg';

import About from "../components/About";
import Partners from "../components/Partners";
import Features from "../components/Features";
import BuySellCrypto from "../components/BuySellCrypto";
import Exchange from "../components/Exchange";
import { Link } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';

const Home = () => {
  const handleCopyText = (e) => {
    e.preventDefault()
    var copyText = "info@lovely.finance";
    navigator.clipboard.writeText(copyText);
    toast.success('Copied!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      <div className="main-Container">
        <h1 className="stroke-text">LOVELY WALLET</h1>
        <div className="Wallet-container">
          <div className="Wallet-inner">
            <div className="Wallet-btn">
              <img src={logo} alt="error-pencil" />
            </div>
            <div className="Wallet-svg-div">
              <div>
                <span>by</span>
                <span> LOVELY</span>
                <span>FINANACE</span>
                <p>SECURED & SAFE WALLEt</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-buttons">
          <button className="AppStore"></button>
            <Link to="https://play.google.com/store/apps/details?id=com.lovely_wallet_2&hl=en&gl=US" target="_blank">
            <button className="PlayStore"></button>
          </Link>
        </div>
        <About />
        <Features />
        <BuySellCrypto />
        <Exchange />
        <Partners />
        <div className="Wallet-container Lovely-Wallet" style={{ marginTop: "200px", cursor:"pointer" }} onClick={handleCopyText}>
          <div className="Wallet-inner">
            <div className="Wallet-btn">
              <img src={logo} alt="error-pencil" />
            </div>
            <div className="Wallet-svg-div">
              <div>
                <p>Contact Us: <span>Info@lovely.finance</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
