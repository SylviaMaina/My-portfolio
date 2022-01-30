import React from "react";
import about from "./About.jpg";
import "./About.css";

function About() {
  return (
    <section className="section-1" id="about">
      <h1 className="about-me">My Skills</h1>

      <div className="container-1">
        <div className="image-1">
          <img src={about} alt="" />
        </div>

        <div className="text-1">
          <h1>Skills</h1>
          <p>React js</p>
          <p>JavaScript</p>
          <p>Css</p>
          <p>HTML</p>
          <p>Bootstrap</p>
          <p>Material UI</p>
          <p>WordPress</p>
        </div>
      </div>
    </section>
  );
}

export default About;
