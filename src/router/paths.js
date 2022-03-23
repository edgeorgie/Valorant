import { Agents } from '../pages/Agents/Agents'
import { Guns } from '../pages/Guns/Guns'
import { Home } from '../pages/Home/Home'

export const Paths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <Home />
  },
  {
    path: '/agents',
    element: <Agents />
  },
  {
    path: '/guns',
    element: <Guns />
  }
]
