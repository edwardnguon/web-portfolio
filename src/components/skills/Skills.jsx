import React from 'react';
import { motion } from 'framer-motion';

import './Skills.scss';

const skillsData = [
   { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg" },
  { name: "Node", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/c.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg" },
 { name: "Kotlin", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/kotlin.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg" },
];

const Skills = () => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = "My Skills";

  return (
    <motion.section
      className="skills"
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
        {skills.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
      <div className="center">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={defaultAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={skill.logo} alt={`${skill.name} logo`} />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
