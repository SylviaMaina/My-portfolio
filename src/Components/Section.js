import React from "react";
import "./Section.css";
import grey from "./greylappy.jpg";

function About() {
  return (
    <section className="main-section">
      <div className="container">
        <div className="texts">
          <h1>Hello My name is</h1>
          <h1 className="h1-big">Sylvia Maina</h1>
          <p>
            Front-End react js developer with academic experience in Business
            information technology and additional experience in frameworks such
            as bootstrap, material ui and many more. I am open to learning even
            more skills to add on to my expertise and increase the quality of my
            projects
          </p>
          <button className="text-button">
            <a href="https://github.com/SylviaMaina">My work</a>
          </button>
        </div>
        <div className="image">
          <img src={grey} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
