import React from "react";
import Section from "../src/Components/Section";
import "./App.css";
import Header from "../src/Components/Header";
import About from "../src/Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
