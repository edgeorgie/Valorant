import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.scss'

export const HeaderMenu = () => {
  return (
    <nav>
      <ul className='with-indicator'>
        <li className='Nav-item is-active'>
          <Link to='/agents'>
            Agents
          </Link>
        </li>
        <li className='Nav-item'>
          <Link to='/cards'>
            Cards
          </Link>
        </li>
        <li className='Nav-item'>
          <Link to='/guns'>
            Guns
          </Link>
        </li>
        <li className='Nav-item'>
          <Link to='/titles'>
            Titles
          </Link>
        </li>
        <li className='Nav-item'>
          <Link to='/modes'>
            Modes
          </Link>
        </li>
      </ul>
    </nav>
  )
}
