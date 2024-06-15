import React, { useState, useRef } from 'react';
import './SelectLang.css';


const SelectLang = () => {
    const [selectedOption, setSelectedOption] = useState("ENG");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const selectItemsRef = useRef(null);
    const selectOptions = ["ENG", "DE",];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const handleSelectClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // const closeAllSelect = (event) => {
    //     if (selectItemsRef.current && !selectItemsRef.current.contains(event.target)) {
    //         setIsDropdownOpen(false);
    //     }
    // };

    return (
        <div className="custom-select" >
            <div className={`select-selected ${isDropdownOpen ? "select-arrow-active" : ""}`} onClick={handleSelectClick} >
                {selectedOption}
            </div>
            <div ref={selectItemsRef} className={`select-items ${isDropdownOpen ? "" : "select-hide"}`}>
                {selectOptions.map((option, index) => (
                    <div key={index} className={selectedOption === option ? "same-as-selected" : ""} onClick={() => handleOptionClick(option)} >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectLang;
