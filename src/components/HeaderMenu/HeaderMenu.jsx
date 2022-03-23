import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.scss'

export const HeaderMenu = () => {
  return (
    <>
      <nav>
        <ul className='with-indicator'>
          <li
            className='Nav-item agents' onClick={() => {
              document.querySelector('.guns').classList.remove('is-active')
              document.querySelector('.agents').classList.add('is-active')
            }}
          >
            <Link to='/agents'>
              Agents
            </Link>
          </li>
          <li
            className='Nav-item guns' onClick={() => {
              document.querySelector('.agents').classList.remove('is-active')
              document.querySelector('.guns').classList.add('is-active')
            }}
          >
            <Link to='/guns'>
              Guns
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
