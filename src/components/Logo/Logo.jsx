import React from 'react'
import { Link } from 'react-router-dom'
import Houm from '../../assets/icon/houmLogo.svg'
import Valorant from '../../assets/icon/valorant.svg'
import './Styles.scss'

export const Logo = () => {
  return (
    <div className='logo-container'>
      <Link to='/home'>
        <img className='logo--img__valorant' src={Valorant} alt='Houm Logo' />
      </Link>
      <span className='logo--span'></span>
      <Link to='/home'>
        <img className='logo--img__houm' src={Houm} alt='Houm Logo' />
      </Link>
    </div>
  )
}
