import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'AI Powered Financial App',
    description: 'Description of AI Powered Financial App...',
    imageUrl: 'images/pinki2.jpeg',
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'Travel Agency App',
    description: 'Description of Travel Agency App...',
    imageUrl: 'https://your-image-url.com/image2.png',
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'AI Powered Real Estate',
    description: 'Description of AI Powered Real Estate...',
    imageUrl: 'https://your-image-url.com/image3.png',
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'Newsroom Management',
    description: 'Description of Newsroom Management...',
    imageUrl: 'https://your-image-url.com/image4.png',
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'Travel Agency App',
    description: 'Description of Travel Agency App...',
    imageUrl: 'https://your-image-url.com/image2.png',
    githubLink: 'https://github.com/Parwati9140',
  },
  {
    name: 'AI Powered Real Estate',
    description: 'Description of AI Powered Real Estate...',
    imageUrl: 'https://your-image-url.com/image3.png',
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
