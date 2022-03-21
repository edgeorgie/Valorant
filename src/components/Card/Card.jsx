import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Model } from '../Models/ModelAgent/Model'
import { Backdrop } from '../Backdrop/Backdrop'
import './Styles.scss'

export const Card = ({ agente, ability1, ability2, ability3, ability4 }) => {
  const [show, setShow] = useState(false)
  const [heart, setHeart] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const handleShow = () => {
    setShow(!show)
  }

  const handleHeart = () => {
    setHeart(!heart)
  }

  const readMore = () => {
    setSelectedId(agente.uuid)
  }

  return (
    <>
      <motion.div
        className='card-container--img'
        style={{
          backgroundImage: `url(${agente.bustPortrait})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='card-container'>
          <div
            className={`box ${
              show === false
                ? 'agent-content'
                : 'agent-content-click-responsive'
            }`}
            onClick={handleShow}
          >
            <div className='agent-info-container'>
              <div className='agent-info-principal'>
                <span className='agent-role'>{agente.role.displayName}</span>
                <h3 className='agent-name'>{agente.displayName}</h3>
              </div>

              <div className='agent-info-secondary'>
                <p className='agent-description'>{agente.description}</p>

                <div className='agent-abilities-container'>
                  <div className='agent-ability1'>
                    <img src={ability1.displayIcon} alt='Ability icon' />
                    <small className='ability-name'>
                      {ability1.displayName}
                    </small>
                  </div>
                  <div className='agent-ability2'>
                    <img src={ability2.displayIcon} alt='Ability icon' />
                    <small className='ability-name'>
                      {ability2.displayName}
                    </small>
                  </div>
                  <div className='agent-grenade'>
                    <img src={ability3.displayIcon} alt='Ability icon' />
                    <small className='ability-name'>
                      {ability3.displayName}
                    </small>
                  </div>
                  <div className='agent-ultimate'>
                    <img src={ability4.displayIcon} alt='Ability icon' />
                    <small className='ability-name'>
                      {ability4.displayName}
                    </small>
                  </div>
                </div>

                <div className='buttons-container'>
                  <button className='read-more' onClick={() => readMore()}>
                    Read more
                  </button>
                  <button className='add-favorite' onClick={handleHeart}>
                    <i
                      className={`box ${
                        heart === false ? 'heart' : 'heart heart-click'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {selectedId && (
        <Backdrop onClick={() => setSelectedId(null)}>
          <Model
            agente={agente}
            setSelectedId={setSelectedId}
            ability1={ability1}
            ability2={ability2}
            ability3={ability3}
            ability4={ability4}
          />
        </Backdrop>
      )}
    </>
  )
}
