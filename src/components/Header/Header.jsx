import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import './Styles.scss'

export const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>Item 1</li>
        </ul>
      </nav>
    </header>
  )
}
