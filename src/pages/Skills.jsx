import React from 'react';
import './Skills.css';

const skills = [

    { name: 'React', image: `${process.env.PUBLIC_URL}/images/react.svg` },
    { name: 'Html', image: `${process.env.PUBLIC_URL}/images/html.svg` },
    { name: 'Css', image: `${process.env.PUBLIC_URL}/images/css.svg` },
    { name: 'Javascript', image: `${process.env.PUBLIC_URL}/images/javaScript.svg` },
    { name: 'Bootstrap', image: `${process.env.PUBLIC_URL}/images/bootstrap.svg` },
    { name: 'Mongodb', image: `${process.env.PUBLIC_URL}/images/mongoDb.svg` },
    { name: 'Node', image: `${process.env.PUBLIC_URL}/images/mongoDb.svg` }, 
    { name: 'Git', image: `${process.env.PUBLIC_URL}/images/git.svg` },
    { name: 'Figma', image: `${process.env.PUBLIC_URL}/images/figma.svg` },
    { name: 'Java', image: `${process.env.PUBLIC_URL}/images/java.svg` },
    { name: 'Php', image: `${process.env.PUBLIC_URL}/images/php.svg` },  
    { name: 'Mysql', image: `${process.env.PUBLIC_URL}/images/mysql.svg` },
    { name: 'PostgreSQL', image: `${process.env.PUBLIC_URL}/images/postgresql.svg` },
    { name: 'Canva', image: `${process.env.PUBLIC_URL}/images/canva.svg` },
    { name: 'MaterialUi', image: `${process.env.PUBLIC_URL}/images/materialui.svg` }
  
];

const Skills = () => {
  return (
    <div className='skill'>
       <div className='n'><h3>Skills<hr/></h3></div>
    <div className="skills-container">
     
      <div className="skills-scroll">
      
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
};

export default Skills;
