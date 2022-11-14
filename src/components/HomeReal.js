import React, { useState } from "react";
import {Link} from "react-scroll"
import "./Home.css";
import chlogo from "../assets/temporary.PNG";
import wave from "../assets/wave.png"



const HomeReal = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="home" id="home">
    
      <div className="mask">
      
        <h1>Welcome to</h1>
        <h2>ZeroWare</h2>
        <img className="image" src={chlogo}></img>

        <div className="buttons">
          <button className="purchase-button"><Link to="purchase" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Purchase</Link></button>
          <button className="readme"><Link to="features" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Features</Link></button>
        </div>
      </div>
      <img className="wave" src={wave}></img>

    </div>
  );
};

export default HomeReal;
