import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  img: string
  alt: string
}
const PlanetImg: React.FC<Props> = ({ img, alt }) => {
  return (
    <motion.div
      animate={{
        y: [10, 0, 10],
        rotate: [0, 720],
        transition: { duration: 150, delay: 5, type: 'keyframes', repeat: Infinity },
      }}
    >
      <AnimatePresence mode='wait'>
        <motion.img
          key={alt}
          initial={{ opacity: 0, y: -10, rotate: 90 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 5, type: 'spring' },
          }}
          exit={{ opacity: 0, rotate: -90, transition: { duration: 1 } }}
          src={img}
          alt={alt}
          className={'rounded-full w-40 h-40 md:w-72 md:h-72 lg:w-[455px] lg:h-[455px] '}
        />
      </AnimatePresence>
    </motion.div>
  )
}
export default PlanetImg
