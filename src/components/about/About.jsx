import React from 'react'
import {motion} from 'framer-motion'

import './About.scss'

const About = () => {
  const defaultAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
  }

  const about = "About"
  const me = "Me"

  return (
    <div className='about'>
        <motion.span initial='hidden' animate='visible' transition={{staggerChildren: 0.07}} className='textContainer'>
            {about.split("").map((char) => (<motion.span variants={defaultAnimation}>{char}</motion.span>))}
            <br />
            {me.split("").map((char) => (<motion.span variants={defaultAnimation}>{char}</motion.span>))}
        </motion.span>
    </div>
  )
}

export default About