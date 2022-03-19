import React from 'react'
import './Styles.scss'

export const Card = () => {
  return (
    <>
      <div className='card-container'>
        <div className='agent-content'>
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
                <button className='add-favorite'>C</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
