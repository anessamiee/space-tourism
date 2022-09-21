import { AnimatePresence, motion } from 'framer-motion'
import useMediaQuery from '../../hooks/useMediaQuery'

type Props = {
  images: {
    landscape: string
    portrait: string
  }
  alt: string
}
const TechImage: React.FC<Props> = ({ images, alt }) => {
  const desktop = useMediaQuery('(min-width: 1024px)')
  return (
    <AnimatePresence mode='wait'>
      <motion.img
        key={alt}
        initial={{ opacity: 0, x: 10 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 5, type: 'spring' },
        }}
        exit={{ opacity: 0, x: 10, transition: { duration: 0.5 } }}
        src={desktop ? images.portrait : images.landscape}
        alt={alt}
        className='object-cover object-center w-full h-44 md:h-80 lg:aspect-square lg:h-[500px] lg:w-[500px]'
      />
    </AnimatePresence>
  )
}
export default TechImage
