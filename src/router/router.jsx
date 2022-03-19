import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Paths } from './paths'

export const Router = () => {
  return (
    <Routes>
      {Paths.map((path, index) => {
        return (
          <Route
            key={index}
            path={path.path}
            element={path.element}
          />
        )
      })}
    </Routes>
  )
}
