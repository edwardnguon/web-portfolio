import "./Menu.scss"
import "./Links/Links"
import Links from "./Links/Links"
import Toggle from "./Toggle/Toggle"

import React from 'react'
import { useState } from "react"
import {motion} from "framer-motion"

const Menu = () => {
  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }

  return (
    <motion.div className="menu" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
        <Toggle setOpen={setOpen}/>
      </motion.div>
    </motion.div>
  )
}

export default Menu