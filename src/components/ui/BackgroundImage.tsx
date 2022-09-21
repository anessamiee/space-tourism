import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'

const BackgroundImage = () => {
  const [img, setImg] = useState<string>()
  const tablet = useMediaQuery('(min-width: 768px)')
  const desktop = useMediaQuery('(min-width: 1024px)')
  const location = useLocation()
  useEffect(() => {
    location.pathname === '/' ? setImg('home') : setImg(location.pathname.substring(1))
  }, [location.pathname])

  return (
    <AnimatePresence mode='wait' initial>
      <motion.img
        src={`/assets/${img}/background-${img}-${
          desktop ? 'desktop' : tablet ? 'tablet' : 'mobile'
        }.jpg`}
        alt='background'
        key={location.pathname}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{ opacity: 0 }}
        className={
          'fixed  bg-cover bg-no-repeat bg-center h-screen w-screen z-10 object-cover object-center '
        }
      />
    </AnimatePresence>
  )
}
export default BackgroundImage
