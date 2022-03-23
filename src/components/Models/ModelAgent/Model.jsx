import React from 'react'
import { motion } from 'framer-motion'

export const Model = ({ agente, setSelectedId, ability1, ability2, ability3, ability4 }) => {
  return (
    <motion.div
      className='card-container--modal'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: -100
      }}
      transition={{ duration: 0.5 }}
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
          <span className='agent-tags'>
            <b>Tags: </b>
            {
              agente.characterTags !== null ? agente.characterTags.map((tag, id) => <span key={id}>{tag} </span>) : 'this agent has 0 tags.'
            }
          </span>

          <div className='close-container' onClick={() => setSelectedId(null)}>
            <div className='leftright' />
            <div className='rightleft' />
            <label className='close'>Close?</label>
          </div>

          <div className='card-container-modal-content-info-right'>
            <div className='card-container--modal-content-info-principal'>
              <h3 className='agent-name'>{agente.displayName}</h3>
              <img className='agent-icon' src={agente.displayIconSmall} alt='icono small' />
              <div className='agent-role-container'>
                <div className='agent-role-type'>
                  <img className='agent-role--icon' src={agente.role.displayIcon} alt='Agent icon' />
                  <span className='agent-role'>{agente.role.displayName}</span>
                </div>
                <small>{agente.role.description}</small>
              </div>
            </div>
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
