import React, { useState } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="header" className="logo" smooth={true} duration={1000}>
        <img src="images/logo.png" alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="header" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={500}>
            Features
          </Link>
        </li>

        <li>
          <a href="https://haarogya.com/privacy-policy">Privacy</a>
        </li>
        <li>
          <a href="https://haarogya.com/terms">Terms</a>
        </li>
        <li>
          <a href="https://haarogya.com/refund-policy">Refund Policy</a>
        </li>
        <li>
          <Link to="subscription" smooth={true} duration={500}>
            Subscription
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
