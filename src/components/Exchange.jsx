import React from 'react';
import BnbLovely from '../assets/images/BNB-LOVELY.png'
import Refresh from '../assets/images/Refresh.svg'
import BNB from '../assets/images/BNB.svg'
import LOVELY from '../assets/images/LOVELY.svg'
import { Link } from 'react-router-dom';

export default function Exchange() {
  return (
    <>
      <div className="Exchange-container">
        <h1>Exchange <span>Instantly</span></h1>
        <p>Trade Crypto Anytime, Anywhere.</p>
        <img src={BnbLovely} alt="" className="bnb-lovely" />
        <div className="Exchange">
          <div className="ExchangeTop">
            <div className="Exchange-inner-left">
              you pay
              <h4>1</h4>
            </div>
            <div className="Exchange-inner-right">
              <span>BNB</span>
              <img src={BNB} alt="" className="Exchange-inner-logo" />
            </div>
          </div>
          <button className="Refresh"><img src={Refresh} alt="" /></button>
          <div className="ExchangeBottom">
            <div className="Exchange-inner-left">
              YOU RECEIVE
              <h4>35,000,000,000</h4>
            </div>
            <div className="Exchange-inner-right">
              <span>LOVELY</span>
              <img src={LOVELY} alt="" className="Exchange-inner-logo" />
            </div>
          </div>
        </div>
        <Link to="https://lovelyswap.com/" target='_blank'>
          <button className="lovely-btn btn">LOVELY SWAP</button>
        </Link>
      </div>
    </>
  )
}
