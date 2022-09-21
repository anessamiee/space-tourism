import { AnimatePresence, motion } from 'framer-motion'
import InfoCard from './InfoCard'
type Props = {
  name: string
  description: string
  distance: string
  travel: string
}
const DestinationInfo: React.FC<Props> = ({ name, description, distance, travel }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={name}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <section className='flex flex-col mx-6 mt-5 md:mt-6 md:mx-24 lg:m-0 '>
          <h2 className='self-center lg:self-start'>{name}</h2>
          <p className=''>{description}</p>
          <div className='h-px bg-blue-light opacity-20 my-8 md:mt-12 md:mb-7 lg:mt-14 ' />
        </section>
        <motion.div
          key={name}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 2, delay: 0.5, type: 'spring' },
          }}
          className='flex flex-col items-center justify-center md:flex-row md:justify-evenly lg:justify-between'
        >
          <InfoCard title='Avg. distance' info={distance} />
          <InfoCard title='Est. travel time' info={travel} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
export default DestinationInfo
