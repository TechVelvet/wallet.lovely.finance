import React from 'react';
import '../assets/css/Footer.css';
import { Link } from "react-router-dom";
import telegramIcon from '../assets/images/Telegram.svg';
import youtubeIcon from '../assets/images/Youtube.svg';
import twitterIcon from '../assets/images/Twitter.svg';
import githubIcon from '../assets/images/GitHub.svg';
import reportIcon from '../assets/images/Report.svg';
import Data from '../assets/datas/footerLi';

export default function Footer() {

    return (
        <>
            <div className="Footer">
                <div className="footer-inner">
                    <div className="footer-left">
                        <div className='bottom-buttons'>
                            <Link to="">
                                <button className="AppStore"></button>
                            </Link>
                            <Link to="https://play.google.com/store/apps/details?id=com.lovely_wallet_2&hl=en&gl=US" target="_blank">
                                <button className="PlayStore"></button>
                            </Link>
                            <Link to="">
                                <button className='chromeExtension'></button>
                            </Link>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="menu-list">
                            {Data.map((elem) =>
                                elem.map((innerElem, key) => <ul>
                                    <li key={key}>{innerElem.ItemText}</li>
                                    {
                                        innerElem.itemList.map((subElement, index) => (
                                            <li key={index}>
                                                <Link to={subElement.ItemLink} >{subElement.ItemText}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>)
                            )}
                        </div>
                        <div className="SocialMedia">
                            <Link to="https://t.me/lovelywallet" target="_blank">
                                <button><img src={telegramIcon} alt="" /></button>
                            </Link>
                            <Link to="https://www.youtube.com/watch?v=5ey5El-7gm8" target="_blank">
                                <button><img src={youtubeIcon} alt="" /></button>
                            </Link>
                            <Link to="https://twitter.com/lovely_wallet" target="_blank">
                                <button><img src={twitterIcon} alt="" /></button>
                            </Link>
                            <Link to="https://github.com/Lovely-Wallet" target="_blank">
                                <button><img src={githubIcon} alt="" /></button>
                            </Link>
                            <Link to="http://walletdocs.lovely.finance/" target="_blank">
                                <button><img src={reportIcon} alt="" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="Footer-text">2024 © Lovely Finance - All Rights Resereved</p>
            </div>
        </>
    )
}
