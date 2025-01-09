import React from 'react';
import { motion } from 'framer-motion';

import './Projects.scss';

const projectData = [
  {
    title: 'Three Trios',
    description: 'Java-based card game made with object oriented programming principles.',
    link: 'https://github.com/edwardnguon/three-trios',
  },
  {
    title: 'This Web-Portfolio',
    description: 'Made with React components and styled with Sass css.',
    link: 'https://github.com/edwardnguon/web-portfolio',
  },
];

const Projects = () => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = "My Projects";

  return (
    <motion.section
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={defaultAnimation}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.07 }}
        className="textContainer"
      >
        {projects.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
      <div className='center'>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardAnimation}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
};

export default Projects;
