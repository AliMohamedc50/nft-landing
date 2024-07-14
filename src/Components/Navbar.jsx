import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Navbar = ({ currentTheme, changeTheme }) => {
    const [navState, setNavState] = useState(false);

  return (
    <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
              ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>




      <div className={`links-container ${navState && "nav-visible"}`}>
        <ul className="link">
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
