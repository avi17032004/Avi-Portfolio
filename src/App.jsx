import React from "react";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import "aos/dist/aos.css";
import Skills from "./component/Skills.jsx";
import Contact from "./component/Contact.jsx";
import Projects from "./component/Projects.jsx";
import GoToTop from "./component/GoToTop.jsx";

const App = () => {
  return (
    <>
        <Navbar />
      <div>
        <GoToTop/>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
