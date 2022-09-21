import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  name: string
  description: string
}
const TechInfo: React.FC<Props> = ({ name, description }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.section
        key={name}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2, type: 'spring' } }}
        exit={{ opacity: 0, x: -30, transition: { duration: 0.5 } }}
        className='text-center lg:text-start mx-6 md:mx-40 mb-10 md:mb-0 lg:mx-10  xl:ml-20 xl:mr-32 lg:w-3/4'
      >
        <h6 className='subh2 lg:nav-text border-none lg:cursor-text text-blue-light'>
          THE TERMINOLOGY…
        </h6>
        <h3 className='mb-4 mt-2 md:mt-4 md:mb-5'>{name}</h3>
        <p className=' text-justify'>{description}</p>
      </motion.section>
    </AnimatePresence>
  )
}
export default TechInfo
