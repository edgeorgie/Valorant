import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, MotionConfig, useMotionValue } from 'framer-motion'
import { Shapes } from './Shapes'
import { transition } from './settings'
import useMeasure from 'react-use-measure'
import './Styles.scss'

export const Home = () => {
  const [ref, bounds] = useMeasure({ scroll: false })
  const [isHover, setIsHover] = useState(false)
  const [isPress, setIsPress] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <>
      <div className='header'>
        <div className='inner-header flex'>
          <h2>👋, I'm Edwin.</h2>
          <h1>Welcome to my technical test</h1>
          <div className='home-container'>
        <div className='home-container--content'>
          <div className='home-container--content-subtitle'>
                <h3>To made it possible I chose the <a href='https://valorant-api.com/'>Valorant API.</a></h3>
                <h4>I used the following technologies: </h4>
          </div>
          <div className='home-container--content-list'>
            <div>
              <li>Axios</li>
              <li>Sass</li>
              <li>Story Book</li>
              <li>Framer motion</li>
              <li>Intersection Observer (DOM API)</li>
              <li>React Hooks (useState, useRef, useEffect...)</li>
            </div>
          </div>
        </div>
      </div>
      </div>
      <MotionConfig transition={transition}>
        <motion.button className='home-button'
          ref={ref}
          initial={false}
          animate={isHover ? 'hover' : 'rest'}
          whileTap='press'
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.5 },
            press: { scale: 1.4 }
          }}
          onHoverStart={() => {
            resetMousePosition()
            setIsHover(true)
          }}
          onHoverEnd={() => {
            resetMousePosition()
            setIsHover(false)
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2)
            mouseY.set(e.clientY - bounds.y - bounds.height / 2)
          }}
        >
          <motion.div
            className='shapes'
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          >
            <div className='pink blush' />
            <div className='blue blush' />
            <div className='container'>
              <Suspense fallback={null}>
                <Shapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            className='label'
          >
            <Link to='/agents'><h3 className='btn-text'>See the test!</h3></Link>
          </motion.div>
        </motion.button>
      </MotionConfig>
      <div>
      <svg className='waves' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 24 150 28' preserveAspectRatio='none' shapeRendering='auto'>
      <defs>
      <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
      </defs>
      <g className='parallax'>
      <use xlinkHref='#gentle-wave' x='48' y='0' fill='hsla(14, 100%, 89%, 1)' />
      <use xlinkHref='#gentle-wave' x='48' y='3' fill='hsl(14, 100%, 91%)' />
      <use xlinkHref='#gentle-wave' x='48' y='5' fill='hsla(14, 100%, 69%, 1)' />
      <use xlinkHref='#gentle-wave' x='48' y='7' fill='hsl(0, 30%, 95%)' />
      </g>
      </svg>
      </div>
      </div>
    </>
  )
}
