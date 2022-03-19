import React, { useState } from 'react'
import './Styles.scss'

export const Card = () => {
  const [show, setShow] = useState(false)
  const [heart, setHeart] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const handleHeart = () => {
    setHeart(!heart)
  }

  return (
    <>
      <div className='card-container'>
        <div
          className={`box ${
            show === false
              ? 'agent-content'
              : 'agent-content-click agent-content-click-responsive'
          }`}
          onClick={handleShow}
        >
          <div className='agent-info-container'>
            <div className='agent-info-principal'>
              <span className='agent-role'>Role</span>
              <h3 className='agent-name'>Agente</h3>
            </div>

            <div className='agent-info-secondary'>
              <p className='agent-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className='agent-abilities-container'>
                <div className='agent-ability1'>
                  <img
                    src='https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png'
                    alt='icono'
                  />
                  <small className='ability-name'>Ability</small>
                </div>
                <div className='agent-ability2'>
                  <img
                    src='https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png'
                    alt='icono'
                  />
                  <small className='ability-name'>Ability</small>
                </div>
                <div className='agent-grenade'>
                  <img
                    src='https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png'
                    alt='icono'
                  />
                  <small className='ability-name'>Ability</small>
                </div>
                <div className='agent-ultimate'>
                  <img
                    src='https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png'
                    alt='icono'
                  />
                  <small className='ability-name'>Ability</small>
                </div>
              </div>

              <div className='buttons-container'>
                <button className='read-more'>Leer más</button>
                <button className='add-favorite' onClick={handleHeart}>
                  <i
                    className={`box ${
                      heart === false ? 'heart' : 'heart heart-click'
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
