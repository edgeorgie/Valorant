import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Backdrop = ({ children, onClick }) => {
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
    >
      <motion.div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }} onClick={onClick}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{
          y: '-100vh',
          opacity: 0
        }}
      >
        {children}
    </motion.div>
    </AnimatePresence>
  )
}
