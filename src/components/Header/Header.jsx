import React from 'react'
import { Logo } from '../Logo/Logo'
import { Link } from 'react-router-dom'
import './Styles.scss'

export const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul className='with-indicator'>
          <li className='Nav-item is-active'>
            <Link to='/agentes'>
              Agentes
            </Link>
          </li>
          <li className='Nav-item'>
            <Link to='/cards'>
              Cards
            </Link>
          </li>
          <li className='Nav-item'>
            <Link to='/armas'>
              Armas
            </Link>
          </li>
          <li className='Nav-item'>
            <Link to='/titulos'>
              Títulos
            </Link>
          </li>
          <li className='Nav-item'>
            <Link to='/modos'>
              Modos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}