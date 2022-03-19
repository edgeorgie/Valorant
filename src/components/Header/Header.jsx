import React from 'react'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { Logo } from '../Logo/Logo'

export const Header = () => {
  return (
    <header>
      <Logo />
      <HeaderMenu />
    </header>
  )
}
