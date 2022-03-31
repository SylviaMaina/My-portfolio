import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#BA3F1D"
          fill-opacity="1"
          d="M0,320L60,320C120,320,240,320,360,272C480,224,600,128,720,101.3C840,75,960,117,1080,165.3C1200,213,1320,267,1380,293.3L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="contacts">
        <div>
          <h1>Contact Me</h1>
        </div>
        <ul>
          <li>E.mail: sylviamaina16@gmail.com</li>
          <li></li>
          <li>Phone number : 0721943588</li>
        </ul>
        <ul>
          <li>
            <h3>LinkedIn</h3>
            <a href=" ">www.linkedin.com/in/sylvia-maina-a2b95615</a>
          </li>

          <li>
            <h3>GitHub</h3>
            <a href="https://github.com/SylviaMaina">
              https://github.com/SylviaMaina
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
