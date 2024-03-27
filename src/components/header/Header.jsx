import React from 'react'
import "./Header.scss"
import {motion} from "framer-motion"
import Menu from '../menu/Menu'

const Header = () => {
  const openA = {initial: {opacity:0, scale:0.5}, animate: {opacity:1, scale:1}, transition: {duration:0.5}}
  return (
    <div className="header">
      <Menu/>
        <div className='wrapper'>
            <motion.span initial={openA.initial} animate={openA.animate} transition={openA.transition}>EN</motion.span>

            <motion.div className='socials'>
                <a href='#'><motion.img src='/linkedin.png' alt='linked in' initial={openA.initial} animate={openA.animate} transition={openA.transition}></motion.img></a>
                <a href='#'><motion.img src='/github.png' alt='git hub' initial={openA.initial} animate={openA.animate} transition={openA.transition}></motion.img></a>
                <a href='#'><motion.img src='/instagram.png' alt='instagram' initial={openA.initial} animate={openA.animate} transition={openA.transition}></motion.img></a>
                <a href='#'><motion.img src='/facebook.png' alt='facebook' initial={openA.initial} animate={openA.animate} transition={openA.transition}></motion.img></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Header