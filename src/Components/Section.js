import React from "react";
import "./Section.css";
import grey from "./images/brown.jpg";

function About() {
  return (
    <section className="main-section">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#BA3F1D"
          fill-opacity="1"
          d="M0,320L60,320C120,320,240,320,360,272C480,224,600,128,720,101.3C840,75,960,117,1080,165.3C1200,213,1320,267,1380,293.3L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className="texts">
          <h1>Sylvia Maina</h1>
          <p>
            Front-End react js developer with academic experience in Business
            information technology and additional experience in frameworks such
            as bootstrap and material ui
          </p>
          <button className="text-button">
            <a href="https://github.com/SylviaMaina">My work</a>
          </button>
        </div>
        <div className="image">
          <img src={grey} alt="" />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 299">
        <path
          fill="#BA3F1D"
          fill-opacity="1"
          d="M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,133.3C672,128,768,96,864,117.3C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default About;
