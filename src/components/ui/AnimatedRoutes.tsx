import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Crew from '../../pages/Crew'
import Destination from '../../pages/Destination'
import Home from '../../pages/Home'
import Technology from '../../pages/Technology'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes
