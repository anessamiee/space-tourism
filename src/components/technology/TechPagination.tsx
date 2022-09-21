import { motion } from 'framer-motion'
import { TechnologyType } from '../../types/TechnologyType'
import PaginationItem from '../ui/Pagination/PaginationItem'

type Props = {
  allTechnologies: TechnologyType[]
  technology: TechnologyType
  setTechnology: (technology: TechnologyType) => void
}
const TechPagination: React.FC<Props> = ({ allTechnologies, technology, setTechnology }) => {
  return (
    <motion.ul
      initial={'hidden'}
      animate='visible'
      variants={list}
      className='flex lg:flex-col items-center justify-center my-8 md:my-14 md:mb-11 lg:m-0 gap-4 lg:w-1/4'
    >
      {allTechnologies.map((item, index) => (
        <PaginationItem<TechnologyType>
          object={item}
          objectStateName={technology.name}
          setState={setTechnology}
          key={item.name}
          className='w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center border-[1px] border-opacity-25 rounded-full border-solid border-white-warm transition-all duration-300 hover:border-opacity-100 cursor-pointer '
          activeClass='bg-white-warm text-blue-dark border-opacity-100 hover:border-opacity-100 cursor-default'
        >
          <h4>{index + 1}</h4>
        </PaginationItem>
      ))}
    </motion.ul>
  )
}
export default TechPagination

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1.5,
      delay: 0.5,
    },
  },
}
