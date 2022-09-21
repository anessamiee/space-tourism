import { motion } from 'framer-motion'
import TechImage from '../components/technology/TechImage'
import TechInfo from '../components/technology/TechInfo'
import TechPagination from '../components/technology/TechPagination'
import TouchNav from '../components/ui/Pagination/TouchNav'
import { useTechnologyDispatch, useTechnologyState } from '../hooks/useData/useTechnology'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Technology: React.FC = () => {
  const { technology, allTechnologies } = useTechnologyState()
  const { setTechnology, nextTechnology, lastTechnology } = useTechnologyDispatch()
  useDocumentTitle('Technology')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='flex flex-col lg:flex-row-reverse items-center justify-center'
    >
      <TouchNav next={nextTechnology} last={lastTechnology} className='w-full lg:w-auto'>
        <TechImage images={technology.images} alt={technology.name} />
      </TouchNav>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className='flex flex-col items-center lg:flex-row lg:ml-28 lg:w-3/5 h-3/5'
      >
        <TechPagination
          allTechnologies={allTechnologies}
          technology={technology}
          setTechnology={setTechnology}
        />
        <TechInfo name={technology.name} description={technology.description} />
      </motion.div>
    </motion.div>
  )
}
export default Technology
