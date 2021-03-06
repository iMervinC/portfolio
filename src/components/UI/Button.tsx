import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { prevAnim } from '@/utils/animations'

const btnAnim = {
  hidden: { x: 0 },
  left: { x: -30 },
  right: { x: 30 },
}

const Button: FC<{ animD?: 'left' | 'right'; onClick?: () => void }> = ({
  children,
  animD,
  onClick,
}) => {
  return (
    <motion.button
      variants={btnAnim}
      initial="hidden"
      animate={animD}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xl border-2 border-solid border-white hover:border-custom focus:outline-none px-10 py-2 rounded-lg fancy-6"
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

const CloseBtn = ({ onClick }) => {
  return (
    <motion.div
      variants={prevAnim}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-500 h-10 w-10 fixed sm:absolute right-2 top-2 flex items-center justify-center rounded-full btn-close"
    >
      <div className="w-5 h-1 rounded-lg transform -rotate-45 absolute"></div>
      <div className="w-5 h-1 rounded-lg transform rotate-45 absolute"></div>
    </motion.div>
  )
}

const PrevButton: FC<{ type?: 'demo' | 'code'; link: string }> = ({
  children,
  link,
  type,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="fancy-6 w-28 sm:w-32 text-center px-4 py-1 text-base sm:text-xl rounded-md border-2 border-solid hover:border-custom"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="focus-within:outline-none">
        {type === 'code' ? `</> Code` : type === 'demo' ? `👁 Demo` : children}
      </button>
    </a>
  )
}

export { Button, CloseBtn, PrevButton }
