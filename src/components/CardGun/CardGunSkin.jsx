import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Styles.scss'

export const CardGunSkin = ({ gun, skin }) => {
  const [showCard, setShowCard] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShowCard(true)
          observer.disconnect()
        }
      })
    observer.observe(ref.current)
  }, [ref])

  return (
    <>
      <motion.div
        ref={ref}
        className='card-gun-container'
        transition={{ duration: 0.7 }}
        animate={{ opacity: showCard ? 1 : 0 }}
      >

        <div className='card-gun-img-container'>
          <img className='card-gun--img' src={skin.displayIcon} alt='Weapon' />
        </div>

        <div className='card-gun--info'>
          <div className='card-gun--info-title'>
            <h3>{gun.displayName}</h3>
            <hr />
          </div>
          <h4>{skin.displayName}</h4>
        </div>
      </motion.div>
    </>
  )
}
