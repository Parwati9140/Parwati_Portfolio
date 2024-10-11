import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'Description of Personal Portfolio...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (59).png`,
    githubLink: 'https://github.com/Parwati9140/Portfolio1',
  },

  {
    name: 'Quiz App',
    description: 'Description of Quiz App..',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (2).png`,
    githubLink: 'https://github.com/Parwati9140/Quiz',
  },
  {
    name: 'Cyber Risk and Reslience',
    description: 'Description of Cyber Risk and Reslience..',
    imageUrl:` ${process.env.PUBLIC_URL}/images/Screenshot (10).png`,
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'Cake Bakkery',
    description: 'Description of Cake Bakkery Website...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (8).png`,
    githubLink: 'https://github.com/Parwati9140',
  },

  {
    name: 'Travel Agency website',
    description: 'Description of Travel Agency Website...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (4).png`,
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'Travel Mitra Website',
    description: 'Description of Travel Mitra Website...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (55).png`,
    githubLink: 'https://github.com/Parwati9140/Travel_Mitra',
  },
  {
    name: 'Health Care Website',
    description: 'Description of Health Care Website...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (58).png`,
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'College Institute Website',
    description: 'Description of College Institute  Website...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (10).png`,
    githubLink: 'https://github.com/Parwati9140/Travel_Mitra',
  },
  {
    name: 'E-commerce Website',
    description: 'Description of E-commerce Website...',
    imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (8).png`,
    githubLink: 'https://github.com/Parwati9140',
  },
  {
  name: 'Job Entry Website',
  description: 'Description of Job Entry Website...',
  imageUrl: `${process.env.PUBLIC_URL}/images/Screenshot (9).png`,
  githubLink: 'https://github.com/Parwati9140',
},
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="n"><h3>Projects<hr/></h3></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
