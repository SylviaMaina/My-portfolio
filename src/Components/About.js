import React from "react";
import "./About.css";
import girl from "./images/Tech Life - Media.png";

function About() {
  return (
    <section className="section-1" id="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#BA3F1D"
          fill-opacity="1"
          d="M0,320L60,320C120,320,240,320,360,272C480,224,600,128,720,101.3C840,75,960,117,1080,165.3C1200,213,1320,267,1380,293.3L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="color-me">
        <h1 className="about-me">Skills I frequently work with</h1>
      </div>

      <div className="container-1">
        <div className="grid-container">
          <div className="grid-item">
            <p>React js</p>
          </div>
          <div className="grid-item">
            <p>JavaScript</p>
          </div>
          <div className="grid-item">
            <p>Css</p>
          </div>
          <div className="grid-item">
            <p>HTML</p>
          </div>
          <div className="grid-item">
            <p>Bootsrap</p>
          </div>
          <div className="grid-item">
            <p>Material UI</p>
          </div>
          <div className="grid-item">
            <p>UX/UI Design</p>
          </div>
        </div>
      </div>
      <div className="girl">
        <img src={girl} alt="..." />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
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
