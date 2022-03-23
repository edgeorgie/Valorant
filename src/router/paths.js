import { Agents } from '../pages/Agents/Agents'
import { Guns } from '../pages/Guns/Guns'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'

export const Paths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
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
