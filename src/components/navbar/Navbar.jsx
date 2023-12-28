import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'
export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Attilio Andrea Marotta
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Attilioo">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/attilio-marotta/">
            <img src="/linkedin.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
