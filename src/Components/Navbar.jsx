import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode"></div>
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
