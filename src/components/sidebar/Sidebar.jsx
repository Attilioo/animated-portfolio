import { useState } from 'react'
import Links from './links/Links'
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: 'spring',
      stiffness: 20,
    },
    close: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 1000,
        damping: 100,
      },
    },
  }

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'close'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}
