import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.scss'

export const NotFound = () => {
  return (
    <section class='wrapper'>
      <div class='container'>
        <div id='scene' class='scene' data-hover-only='false'>
          <div class='circle' data-depth='1.2' />

          <div class='one' data-depth='0.9'>
            <div class='content'>
              <span class='piece' />
              <span class='piece' />
              <span class='piece' />
            </div>
          </div>

          <div class='two' data-depth='0.60'>
            <div class='content'>
              <span class='piece' />
              <span class='piece' />
              <span class='piece' />
            </div>
          </div>

          <div class='three' data-depth='0.40'>
            <div class='content'>
              <span class='piece' />
              <span class='piece' />
              <span class='piece' />
            </div>
          </div>

          <p class='p404' data-depth='0.50'>
            404
          </p>
          <p class='p404' data-depth='0.10'>
            404
          </p>
        </div>

        <div class='text'>
          <article>
            <p>
              This page does not exist. <br />
              Click the button below to #StayAtHome
              <br /> (lol, what a joke)
            </p>
            <Link to='/'>
              <button>I wanna go home!</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
