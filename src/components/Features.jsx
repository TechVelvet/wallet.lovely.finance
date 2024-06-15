import React from 'react';
import securedIcon from '../assets/images/Secured.svg'
import TradeIcon from '../assets/images/TradeAssets.svg'
import EarnIcon from '../assets/images/DexApps.svg'
import DexIcon from '../assets/images/EarnAssets.svg'
import FeaturesOuter from '../assets/images/About-outer.svg'

export default function Features() {

    const Features = [
        {
            Img: securedIcon,
            text: 'Secured',
            p: 'Private key and word phrases always stay inside your wallet'
        },
        {
            Img: TradeIcon,
            text: 'Trade Assets',
            p: 'Trade safely and anonymously'
        },
        {
            Img: DexIcon,
            text: 'Explore Dapps',
            p: 'Discover, Earn, Utilize, Trade and Much More'
        },
        {
            Img: EarnIcon,
            text: 'Earn Assets',
            p: 'Curated By Lovely Inu Airdrop Events & Giveaways'
        }
    ]

    return (
        <>
            <div className="Features-outer">
                <img src={FeaturesOuter} alt="" />
            </div>
            <div className="Features-Container">
                <h2 className="Features-title">
                    <p><span> FEATURES</span></p>
                    ALL YOUR CRYPTO ASSETS AT ONE PLACE EASILY
                </h2>
                <div className="Features">
                    {Features.map((elem, index) => (
                        <div className="featuresCard" key={index}>
                            <div className="FeatureIcon">
                                <img src={elem.Img} alt="" />
                            </div>
                            <div className="FeatureContent">
                                <p>{elem.text}</p>
                                <span>{elem.p}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
