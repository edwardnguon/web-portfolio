import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={defaultAnimation}
      transition={{ duration: 0.8 }}
    >
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

        <motion.div
          className="aboutContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={defaultAnimation}
          transition={{ duration: 1 }}
        >
          <motion.img
            className="headshot"
            src="https://raw.githubusercontent.com/edwardnguon/web-portfolio/main/public/picture.png"
            alt="Edward Nguon, software engineer based in Boston"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p>
            I'm Edward, a software engineer from Philly, now based in Boston
            studying Computer Science and Economics at Northeastern. I like
            building web apps and I've been doing it professionally since my
            sophomore year.
          </p>
          <p>
            My first real project was for Porter Beverage, a beverage distribution
            company in Philadelphia. I built them a full-stack inventory management
            app using React, Node, and MySQL that replaced their old spreadsheet
            workflow. It was my first time owning a project end to end, from the
            database schema to the UI.
          </p>
          <p>
            After that I did my first co-op at Proof, an online notarization and
            identity verification platform used by over 7,000 businesses. There I
            worked across React, Rails, Swift, and Kotlin, shipping features on
            both the web and mobile apps.
          </p>
          <p>
            Outside of code I train Muay Thai, watch UFC, hike, and binge anime.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

