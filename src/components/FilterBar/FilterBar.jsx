import React from 'react'
import './Styles.scss'

export const FilterBar = ({ agentes }) => {
  return (
    <>
      <div className='filter-bar-container'>
        <input type='checkbox' id='role' name='role' onClick={(e) => console.log(e.target)} />
        <select name='role' id='role'>
          {
            agentes.map(agente => (
              <option key={agente.uuid} value={agente.role.displayName}>{agente.role.displayName}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}
