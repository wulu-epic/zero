import "./NavbarStyles.css";
import React, { useState, useEffect } from "react";
import {Link} from "react-scroll"



function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    if (offset){
       
    }

  return (
    <div className="header">
        <ul className="nav-menu" >
            <li>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
            </li>
            <li>
                <Link to="features" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Features</Link>
            </li>
            <li>
                <Link to="purchase" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Purchase</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar