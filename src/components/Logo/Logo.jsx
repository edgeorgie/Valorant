import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.scss'

export const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/home">
        <h1 className="logo--light">Valorant·</h1>
      </Link>
      <Link to="/home">
        <h1 className="logo--bold">Houm</h1>
      </Link>
    </div>
  )
}
