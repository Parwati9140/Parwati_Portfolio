import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React', image: 'images/react.svg' },
  { name: 'Html', image: 'images/html.svg' },
  { name: 'Css', image: 'images/css.svg' },
  { name: 'Javascript', image: 'images/javaScript.svg' },
  { name: 'Bootstrap', image: 'images/bootstrap.svg' },
  { name: 'Mongodb', image: 'images/mongoDb.svg' },
  { name: 'Node', image: 'images/mongoDb.svg' },
  { name: 'Git', image: 'images/git.svg' },
  { name: 'Figma', image: 'images/figma.svg' },
  { name: 'Java', image: 'images/java.svg' },
  { name: 'Php', image: 'images/php.svg' },  
  { name: 'Mysql', image: 'images/mysql.svg' },
  { name: 'PostgreSQL', image: 'images/postgresql.svg' },
  { name: 'Canva', image: 'images/canva.svg' },
  { name: 'MaterialUi', image: 'images/materialui.svg' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className='n'><h3>Skills<hr/></h3></div>
      <div className="skills-scroll">
      
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
