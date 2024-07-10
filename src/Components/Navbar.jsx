import React from 'react';
import logo from "../assets/logo.png";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
const Navbar = ({ currentTheme, changeTheme }) => {
  return (
    <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode">
            {currentTheme === "dark" ? (
              <BsFillMoonFill className="dark" />
            ) : (
              <ImSun className="light" />
            )}
          </div>
        </div>
      </div>
      <div className="links-container">
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
