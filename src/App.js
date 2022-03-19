import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/router'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
