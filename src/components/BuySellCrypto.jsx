import React from 'react';
import screen from '../assets/images/crypto-screens.png'
import BuySell from '../assets/images/Crypto-buy-sell.png'

export default function BuySellCrypto() {
    return (
        <>
            <div className="BuySell-crypto-container">
                <div className="BuySell-outer"></div>
                <div className="Crypto-Content">
                    <div className="Crypto-Mockup">
                        <img src={screen} alt="" />
                    </div>
                    <div className="Crypto-Info">
                        <div className="Buy">
                            <img src={BuySell} alt="" />
                            <p>buy crypto <br /><span>with card</span></p>
                        </div>
                        <div className="Sell">
                            <img src={BuySell} alt="" />
                            <p>buy/sell crypto <br /><span>with p2p</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
