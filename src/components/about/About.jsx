import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const About = () => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const about = "About Me";

  return (
    <motion.section
      className="about"
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
        {about.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
      <motion.p
        className="aboutParagraph"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={defaultAnimation}
        transition={{ duration: 1 }}
      >
        Based in Boston, currently studying and working towards my Bachelors Degree in Computer Science and Economics at Northeastern University. I love to solve problems with my code.
      </motion.p>
    </motion.section>
  );
};

export default About;
