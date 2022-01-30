import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1> SWM .</h1>
        </div>

        <ul className="ul-items">
          <li>
            <Link to="#">Home</Link>
          </li>

          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => window.location.replace("/#about")}
            >
              SKILLS
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => window.location.replace("/#projects")}
            >
              PROJECTS
            </Link>
          </li>

          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
