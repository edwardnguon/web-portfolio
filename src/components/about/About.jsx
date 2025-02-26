import React from 'react';
import { motion } from 'framer-motion';
import picture from '/picture.png';
import './About.scss';

const About = () => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={defaultAnimation} 
      transition={{ duration: 0.8 }}
    > 
      {/* Image Container */}
      <div className="imageContainer">
        <motion.img 
          src={picture} 
          alt="Profile" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Text Container */}
      <div className="textContainer">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.07 }}
        > 
          {"About Me".split("").map((char, index) => (
            <motion.span key={index} variants={defaultAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.p
          className="aboutParagraph"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={defaultAnimation}
          transition={{ duration: 1 }}
        > 
          Based in Boston, currently studying towards my Bachelor's Degree in Computer Science and Economics at Northeastern University. I love to solve problems with my code.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;

