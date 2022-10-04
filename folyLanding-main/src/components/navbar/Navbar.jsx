import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./mobileNavbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="fylo__navbar section__padding">
      <div className="fylo__navbar-img">
        <div
          className="fylo__navbar-links_logo"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img src={logo} alt="navbar" />
        </div>
      </div>

      <div
        className="fylo__navbar-links_container"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <a href="#features">features</a>
        <a href="#team">Team</a>
        <a href="#signIn">Sign In</a>
      </div>

      <div className="fylo__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="fylo__navbar-menu_container scale-up-center ">
            <div className="fylo__navbar-menu_container-links">
              <p>
                <a href="#functions">functions</a>
              </p>
              <p>
                <a href="#Team">Team</a>
              </p>
              <p>
                <a href="#signIn">Sign In</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
