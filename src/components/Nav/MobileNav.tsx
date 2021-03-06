import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export const MobileNav = ({ navigation, where, navHandler }) => {
  return (
    <motion.ul
      className="nav-mobile right-0"
      initial={{ x: '100%' }}
      animate={{ x: '2.5rem' }}
      exit={{ x: '110%' }}
      transition={{ type: 'tween' }}
    >
      {navigation.map((nav, index) => (
        <Link
          scroll={false}
          key={index}
          href={nav === 'home' ? '/' : `/${nav}`}
        >
          <a onClick={() => navHandler(nav)}>
            <li
              style={{ WebkitTextStroke: '1px black' }}
              className={`uppercase hover:text-custom transition duration-500 ${
                nav === where && 'text-custom'
              }`}
            >
              {nav}
            </li>
          </a>
        </Link>
      ))}
    </motion.ul>
  )
}
