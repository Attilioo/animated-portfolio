import './hero.scss'
import { motion } from 'framer-motion'
const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: 'mirror',
    },
  },
}
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ATTILIO ANDREA MAROTTA</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Developer / <br />
            Web Developer
          </motion.h1>
          <motion.h3 variants={textVariants} className="description">
            Creative software developer leveraging a background in arts and
            marketing to build compelling, user-centric solutions.
            <br />
            My unique perspective allows me to approach problem-solving from
            various angles, ensuring optimal and innovative outcomes. <br />
            Driven by passion, I strive to transform challenges into
            opportunities for growth and learning.
          </motion.h3>

          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Software Developer Web Developer
        </motion.div>
        <div className="imageContainer">
          <img
            src="/astronaut.png"
            alt="An astronaut coding on a laptop in space"
          />
        </div>
      </div>
    </div>
  )
}
