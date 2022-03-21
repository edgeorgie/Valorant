import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

  return (
    <>
      <div
        className='card-container--img' style={{
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
                <p className='agent-description'>
                  {agente.description}
                </p>

                <div className='agent-abilities-container'>
                  <div className='agent-ability1'>
                    <img
                      src={ability1.displayIcon}
                      alt='Ability icon'
                    />
                    <small className='ability-name'>{ability1.displayName}</small>
                  </div>
                  <div className='agent-ability2'>
                    <img
                      src={ability2.displayIcon}
                      alt='Ability icon'
                    />
                    <small className='ability-name'>{ability2.displayName}</small>
                  </div>
                  <div className='agent-grenade'>
                    <img
                      src={ability3.displayIcon}
                      alt='Ability icon'
                    />
                    <small className='ability-name'>{ability3.displayName}</small>
                  </div>
                  <div className='agent-ultimate'>
                    <img
                      src={ability4.displayIcon}
                      alt='Ability icon'
                    />
                    <small className='ability-name'>{ability4.displayName}</small>
                  </div>
                </div>

                <div className='buttons-container'>
                  <button className='read-more' onClick={() => setSelectedId(agente.uuid)}>Leer más</button>
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
      </div>
      {
      selectedId && (
        <motion.div
          className='card-container--modal'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: -100
          }}
          transition={{ duration: 0.8 }}
        >
          <div className='card-container--modal-content'>
            <div className='card-container--modal-backgroung-color-left' />
            <div
              className='card-container--modal-content-img' style={
              {
                backgroundImage: `url(${agente.background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }
              }
            >
              <img src={agente.fullPortrait} alt='Agente' />
            </div>
              <div className='card-container--modal-content-info'>
                  {
                    <span className="agent-tags">
                      <b>Tags: </b>
                      {
                        agente.characterTags !== null ? agente.characterTags.map((tag, id) => <span key={id}>{tag} </span>) : 'this agent has no tags.'
                      }
                    </span>
                }
                <motion.button className='close-modal-btn' onClick={() => setSelectedId(null)}>
                  <span className='close-model-btn'>X</span>
                </motion.button>
              <div className='card-container--modal-content-info-principal'>
                <h3 className='agent-name'>{agente.displayName}</h3>
                <div className='agent-role-container'>
                  <div className="agent-role-type">
                    <img className='agent-role--icon' src={agente.role.displayIcon} alt='Agent icon' />
                    <span className='agent-role'>{agente.role.displayName}</span>
                  </div>
                <small>{agente.role.description}</small>
                </div>
              </div>

              <div className='card-container-modal-content-info-right'>
                <div className='card-container--modal-content-info-secondary'>
                  <p className='agent-description'>
                    {agente.description}
                  </p>
                  <div className='agent-abilities-container'>
                    <div className='agent-ability1'>
                      <img src={ability1.displayIcon} alt='Ability icon' />
                      <small className='ability-name'>{ability1.description}</small>
                    </div>
                    <div className='agent-ability2'>
                      <img src={ability2.displayIcon} alt='Ability icon' />
                      <small className='ability-name'>{ability2.description}</small>
                    </div>
                    <div className='agent-grenade'>
                      <img src={ability3.displayIcon} alt='Ability icon' />
                      <small className='ability-name'>{ability3.description}</small>
                    </div>
                    <div className='agent-ultimate'>
                      <img src={ability4.displayIcon} alt='Ability icon' />
                      <small className='ability-name'>{ability4.description}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    }
    </>
  )
}
