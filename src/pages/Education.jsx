import React from 'react';
import './Experience.css';
import { FaUserTie } from 'react-icons/fa';  // Example using Font Awesome icons

const experiences = [
  {
    role: "BACHELOR DEGREE IN COMPUTER SCIENCE",
    company: "Shrinathji Institute Of Technology.",
    date: " 2022 - 25",
    percentage:"pursuing"
  },
  {
    role: "DIPLOMA IN INFORMATION TECHNOLOGY",
    company: "Government Girls Polytechnic Ballia",
    date: "2019 - 2022",
      percentage:"83%"
  },
  {
    role: "SENIOR SECONDARY CERTIFICATION EXAMINATION",
    company: "Bansdih Inter College Bansdih.",
    date: "2018 - 2019",
      percentage:"75%"
  },
  {
    role: "SECONDARY SCHOOL CERTIFICATION EXAMINATION",
    company: " Krishna Devi Public School.",
    date: "2016 - 2017",
      percentage:"81%"
  },
];

const Education = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        {/* Animated Image Container */}
        <div className="animated-image">
          <img src={`${process.env.PUBLIC_URL}/images/eduPurple.svg`} alt="Animated Laptop" />
        </div>

        {/* Experience List */}
        <div className="experience-list-container">
         <div className='n'> <h2  >Educations<hr style={{marginRight:"340px"}}/></h2></div>
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
                  <p>{exp.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
