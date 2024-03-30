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

  const aspiring = "ASPIRING"
  const software = "SOFTWARE"
  const engineer = "ENGINEER"

  return (
    <div className='hero'>
        <motion.span initial='hidden' animate='visible' transition={{staggerChildren: 0.07}} className='textContainer'>
            {aspiring.split("").map((char) => (<motion.span variants={defaultAnimation}>{char}</motion.span>))}
            <br />
            {software.split("").map((char) => (<motion.span variants={defaultAnimation}>{char}</motion.span>))}
            <br />
            {engineer.split("").map((char) => (<motion.span variants={defaultAnimation}>{char}</motion.span>))}
        </motion.span>
    </div>
  )
}

export default Hero