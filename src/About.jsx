import React from "react";
import './index2.css';
const About = ({ isActive, setIsActive }) => {
    return ( 
        <div className={isActive ? "aboutsik scale1" : "aboutsik scale2"}>
            <p>About</p>
            <p>Services</p>
            <p>FAQ</p>
            <p>Contact US</p>
            <button className={'close'} onClick={() => setIsActive(false)}>Close</button>
        </div>
    )
}; export default About;