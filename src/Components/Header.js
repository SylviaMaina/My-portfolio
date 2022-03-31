import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Ham from "./images/icon-hamburger.svg";
import Close from "./images/icon-close-menu.svg";

function Header() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="header">
      <h2 className="logo">SWM.</h2>
      <div className="ham">
        <div className="bar">
          <img src={Ham} alt="..." onClick={() => setShow(true)} />
        </div>
        {show && (
          <div className="nav-bar">
            <div className="close">
              <img src={Close} alt="..." onClick={() => setShow(false)} />
            </div>
            <ul className="list">
              <li>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => window.location.replace("/#")}
                >
                  Home
                </Link>
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
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => window.location.replace("/#contacts")}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <nav>
        <ul className="ul-items">
          <li>
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => window.location.replace("/#")}
            >
              Home
            </Link>
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
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => window.location.replace("/#contacts")}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
