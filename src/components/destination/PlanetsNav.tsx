import { motion } from 'framer-motion'
import React from 'react'
import { Destination } from '../../types/Destination'
import PaginationItem from '../ui/Pagination/PaginationItem'
type Props = {
  allDestinations: Destination[]
  destination: Destination
  setDestination: (destination: Destination) => void
}
const PlanetsNav: React.FC<Props> = ({ allDestinations, destination, setDestination }) => {
  return (
    <motion.ul
      initial='hidden'
      animate='visible'
      variants={list}
      className='flex items-center justify-center lg:justify-start flex-1'
    >
      {allDestinations.map((item) => {
        return (
          <PaginationItem<Destination>
            key={item.name}
            object={item}
            objectStateName={destination.name}
            setState={setDestination}
            className='nav-text mx-4 pb-3 text-blue-light '
            activeClass='text-white-warm border-opacity-100 hover:border-opacity-100'
          >
            {item.name}
          </PaginationItem>
        )
      })}
    </motion.ul>
  )
}
export default React.memo(PlanetsNav)

const list = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}
