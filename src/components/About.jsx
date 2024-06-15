import React from 'react'
import CountUp from 'react-countup';
import AboutArray from '../assets/datas/AboutArray';

export default function About() {
    const [focus, setFocus] = React.useState(false);
    return (
        <>
            <div className="About-Container">
                <div className="About-inner">
                    {AboutArray.map((elem, index) => (
                        <CountUp start={focus ? 0 : null} end={elem.end} duration={2} redraw={true} enableScrollSpy={true} key={index}>
                            {({ countUpRef }) => (
                                <div className={`About-${elem.class}`}>
                                    <p>
                                        <span>{elem.title}</span>
                                        <span>
                                            <span ref={countUpRef} /><strong>+</strong>
                                        </span>
                                    </p>
                                </div>
                            )}
                        </CountUp>
                    ))}
                </div>
            </div>
        </>
    )
}
