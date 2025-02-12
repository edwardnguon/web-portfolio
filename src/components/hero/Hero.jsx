import React from 'react'
import {motion} from 'framer-motion'

import './Hero.scss'

const Hero = () => {
  const defaultAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
  }

  const aspiring = "Hello, I'm"
  const software = "Edward Nguon"
  const engineer = "Aspiring Software Engineer"

  return (
    <div className='hero'>
        <motion.span initial='hidden' animate='visible' transition={{staggerChildren: 0.07}} className='textContainer'>
            {aspiring.split("").map((char) => (<motion.span variants={defaultAnimation}>{char}</motion.span>))}
            <br />
            {software.split("").map((char) => (<motion.span className="name" variants={defaultAnimation}>{char}</motion.span>))}
            <br />
            {engineer.split("").map((char) => (<motion.span className="aspiring" variants={defaultAnimation}>{char}</motion.span>))}
        </motion.span>
    </div>
  )
}

export default Hero
