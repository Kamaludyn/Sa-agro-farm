import { useState } from "react";
import logo from "../assets/images/logo/sa-farm-logo.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <section className="nav-section container">
        <div className="menu">
          <ul>
            <li>
              <a href="#ourProduct">Our Product & Services</a>
            </li>
            <li>
              <a href="/#ourVision">Our Vision</a>
            </li>
          </ul>
          <img className="logo" src={logo} alt="Logo" />
          <ul>
            <li>
              <a href="/#ourMission">Our Mission</a>
            </li>
            <li>
              <a href="/#ourValues">Our Core Values</a>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </div>
      </section>
      {isOpen && (
        <section
          className={`mobile-menu ${isOpen ? "menu-open" : "menu-close"}`}
        >
          <ul>
            <li>
              <a href="/#ourProduct">Our Product & Services</a>
            </li>
            <li>
              <a href="/#ourVision">Our Vision</a>
            </li>
            <li>
              <a href="/#ourMission">Our Mission</a>
            </li>
            <li>
              <a href="/#ourValues">Our Core Values</a>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
