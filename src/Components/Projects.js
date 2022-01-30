import React from "react";
import "./Projects.css";
import linked from "./images/linkedinclone.png";
import sunny from "./images/sunny.jpg";
import calc from "./images/Tip calc.jpg";

function Projects() {
  return (
    <section className="testi" id="projects">
      <h1>Projects</h1>
      <div className="cart-container">
        <div className="cart">
          <img src={linked} alt="" />
          <p>LinkedIn clone</p>
          <h5>
            This clone has been deployed and can be used to add posts to the
            feed using firebase. Skills such as props, firebase database and
            hosting, react dom router, material ui and many more skills.
          </h5>
          <a href="https://github.com/SylviaMaina/LinkedIn-clone">
            See the code...
          </a>
        </div>

        <div className="cart">
          <img src={sunny} alt="" />
          <p>A colorful static website</p>
          <h5>
            This web application is a colorful fun static website that can be
            used as a landing page to give information about a company.
          </h5>
          <a href="https://github.com/SylviaMaina/landing-page">
            See the code...
          </a>
        </div>

        <div className="cart">
          <img src={calc} alt="" />
          <p>Tip calculator</p>
          <h5>
            This web application is used to calculate the tips that you will
            give your server in relation to the total bill amount and how much
            each person is contributing
          </h5>
          <a href="https://github.com/SylviaMaina/TipsCalc">See the code...</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
