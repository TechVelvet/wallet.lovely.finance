import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Partners.css";
import partnersArray from "../assets/datas/partners";
import activeImage from "../assets/images/active.svg"



const menuItems = [
  "Show All", "BlockChain", "Defi", "Other"
]
const Partners = () => {
  const showActive = true;
  const [activeIndexPartner, setActiveIndexPartner] = useState(0);
  const [items, setItems] = useState(partnersArray);
  const filterItem = (categItem) => {
    const updateItems = partnersArray.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updateItems);
  };


  const handleFilterSelection = (element) => {
    if (element === "Show All") {
      setItems(partnersArray);
    }
    else {
      filterItem(element)
    }
  }

  return (
    <>
      <div className="partner-div">
        <span>our <span>partners</span></span>
        <div className="parent-div-partners">
          <div className="Menu">
            <div className="pillar-partner">
              {showActive && <img src={activeImage} alt="error-active" style={{ top: `${activeIndexPartner !== 0 ? (activeIndexPartner + 1) * 42 : 45}px`, transition: ".2s ease" }} />}
            </div>
            <div className="menu-div-partners">
              
              {
                menuItems.map((element, key) => (
                  <div key={key} className={activeIndexPartner === key ? "active-partners" : ""} onClick={() => { handleFilterSelection(element); setActiveIndexPartner(key) }} >
                    {element}
                  </div>
                ))
              }
            </div>
          </div>
          <div className="Partners">
            <div className="partners-flexbox">
              {items.map((element, key) => {
                const { name, imgElem, detail } = element;
                return (
                  <div className="partners-image-div" key={key}>
                    <div className="service-box">
                      <div className="service-icon">
                        <div className="front-content">
                          <img src={imgElem} alt="" />
                          <span>{name}</span>
                        </div>
                      </div>
                      <div className="service-content">
                        <div>
                          <Link
                            to={detail}
                            target="_blank"
                            rel="noreferrer noopener">
                            <button>More Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
