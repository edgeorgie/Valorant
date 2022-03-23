import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './Styles.scss'

export const CardGuns = ({ gun, stats, shopData }) => {
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
        {
          showCard && (
            <><div className='card-gun-img-container'>
              <img className='card-gun--img' src={gun.displayIcon} alt='Weapon' />
              </div><div className='card-gun--info'>
              <div className='card-gun--info-title'>
                  <h3>{gun.displayName}</h3>
                </div>

              <hr />

              <div className='card-gun--stats'>
                  <h4>Stats: </h4>
                  <div className='card-gun--list'>
                  <li>
                      <span>Fire rate:</span> <span>{stats.fireRate}</span>
                    </li>
                  <li>
                      <span>Magazine size:</span> <span>{stats.magazineSize}</span>
                    </li>
                  <li>
                      <span>Reload time:</span>{' '}
                      <span>{stats.reloadTimeSeconds}s</span>
                    </li>
                  <li>
                      <span>Run speed multiplier:</span>{' '}
                      <span>{stats.runSpeedMultiplier}</span>
                    </li>
                  <li>
                      <span>First bullet accuracy:</span>{' '}
                      <span>{stats.firstBulletAccuracy}</span>
                    </li>
                  <li>
                      <span>Shotgun pellet count:</span>{' '}
                      <span>{stats.shotgunPelletCount}</span>
                    </li>
                </div>
                </div>
              <div className='card-gun-shop-data'>
                  <h4>Shop data: </h4>
                  <div className='card-gun--list'>
                  <li>
                      <span>Price:</span> <span>{shopData.cost}</span>
                    </li>
                  <li>
                      <span>Category:</span> <span>{shopData.category}</span>
                    </li>
                </div>
                </div>
                  </div>
            </>
          )
        }
      </motion.div>
    </>
  )
}
