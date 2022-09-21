import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
type Props = {
  role: string
  bio: string
  name: string
}
const CrewInfo: React.FC<Props> = ({ role, bio, name }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.section
        key={name}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 2, type: 'spring' } }}
        exit={{ opacity: 0, x: -30, transition: { duration: 0.5 } }}
        className='lg:w-7/12 h-ful text-center lg:text-start h-96 md:h-48 lg:h-72'
      >
        <h4 className='opacity-50'>{role}</h4>
        <h3 className='md:my-4 lg:mt-6 lg:mb-7'>{name}</h3>
        <p className='lg:mr-32 text-star text-justify'>{bio}</p>
      </motion.section>
    </AnimatePresence>
  )
}
export default CrewInfo
