import { motion } from 'framer-motion'
import { CrewType } from '../../types/CrewType'
import PaginationItem from '../ui/Pagination/PaginationItem'
type Props = {
  allCrews: CrewType[]
  crew: CrewType
  setCrew: (crew: CrewType) => void
}
const CrewPagination: React.FC<Props> = ({ allCrews, crew, setCrew }) => {
  return (
    <motion.ul
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={list}
      className='flex gap-6 my-8 md:my-10 lg:mt-32'
    >
      {allCrews.map((item) => (
        <PaginationItem<CrewType>
          object={item}
          objectStateName={crew.name}
          setState={setCrew}
          key={item.name}
          className='h-4 w-4 bg-white-warm bg-opacity-20 z-10 hover:bg-opacity-50 transition-opacity rounded-full cursor-pointer '
          activeClass=' bg-opacity-100 hover:bg-opacity-100'
        />
      ))}
    </motion.ul>
  )
}

export default CrewPagination

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
}
