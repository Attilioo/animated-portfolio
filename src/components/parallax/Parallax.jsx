import React, { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
export default function Parallax({ type }) {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === 'portfolio'
            ? 'linear-gradient(180deg,#111132, #0c0c1d)'
            : 'linear-gradient(180deg,#111132, #505064)',
      }}
    >
      <motion.h2 style={{ y: yText }}>
        {type === 'portfolio' ? 'Portfolio' : 'Contact Me'}
      </motion.h2>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,

          backgroundImage: `url(${
            type === 'portfolio' ? '/planets.png' : '/sun.png'
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}
