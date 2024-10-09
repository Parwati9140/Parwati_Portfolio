import React from 'react';
import './Experience.css';
import { FaUserTie } from 'react-icons/fa';  // Example using Font Awesome icons

const experiences = [
  {
    role: "SOFTWARE ENGINEER I",
    company: "Teton Private Ltd.",
    date: "Jan 2022 - Present",
  },
  {
    role: "FULLSTACK DEVELOPER",
    company: "Fiverr (freelance)",
    date: "Jun 2021 - Jan 2022",
  },
  {
    role: "SELF EMPLOYED",
    company: "Code and build something everyday.",
    date: "Jan 2018 - Present",
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        {/* Animated Image Container */}
        <div className="animated-image">
          <img src="images/expPurple.svg" alt="Animated Laptop" />
        </div>

        {/* Experience List */}
        <div className="experience-list-container">
          <h2>Experiences</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-role">
                <span className="experience-date text-center">{exp.date}</span>
                  <div className="role-icon-container">
                    <FaUserTie className="experience-icon" />
                    <h3>{exp.role}</h3>
                  </div>
          
                  <p>{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
