import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
 
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hello, This is <span className="highlight">Parwati Maurya</span>
          </h1>
          <h2>
            I’m a Professional <span className="name">Software Developer</span>.
          </h2>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="cta-buttons">
            <button className="btn-primary">Contact Me</button>
            <button className="btn-secondary">Get Resume</button>
          </div>
        </div>
        <div className="code-snippet">
          <pre>
            <code>
              {`
const coder = {
  name: 'Parwati Maurya',
  skills: ['React', 'Node', 'Redux', 'Express', 'NestJS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  }
};
              `}
            </code>
          </pre>
        </div>
      </section>

      <About />
      <Experience />
<Skills/>
<Projects/>
<Education/>
<Contact/>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ⬆ 
      </button>
    </>
  );
};

export default HeroSection;
