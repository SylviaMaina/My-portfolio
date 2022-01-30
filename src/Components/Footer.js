import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>Contact Me</h3>
      </div>
      <div className="contacts">
        <ol>
          <li>E.mail: sylviamaina16@gmail.com</li>
          <li>Phone no. : 0721943588</li>
        </ol>
        <ol>
          <li>
            <img src={LinkedInIcon} alt="" />
            <a href="www.linkedin.com/in/sylvia-maina-a2b95615 ">LinkedIn</a>
          </li>

          <li>
            <img src={GitHubIcon} alt="" />
            <a href="https://github.com/SylviaMaina">GitHub</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Footer;
