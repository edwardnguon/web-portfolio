import React from 'react';
import { motion } from 'framer-motion';

import './Projects.scss';

const Projects = () => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
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
    </motion.section>
  );
};

export default Projects;
