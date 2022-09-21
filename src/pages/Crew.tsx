import { motion } from 'framer-motion'
import CrewImage from '../components/crew/CrewImage'
import CrewInfo from '../components/crew/CrewInfo'
import CrewPagination from '../components/crew/CrewPagination'
import TouchNav from '../components/ui/Pagination/TouchNav'

import { useCrewDispatch, useCrewState } from '../hooks/useData/useCrew'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Crew: React.FC = () => {
  const { crew, allCrews } = useCrewState()
  const { setCrew, nextCrew, lastCrew } = useCrewDispatch()
  useDocumentTitle('Crew')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className=' mx-6 md:mx-40 lg:ml-40 lg:mr-32 flex flex-col-reverse md:flex-col lg:items-start justify-between h-full items-center'
      id='a'
    >
      <CrewInfo name={crew.name} role={crew.role} bio={crew.bio} />
      <CrewPagination crew={crew} allCrews={allCrews} setCrew={setCrew} />
      <TouchNav next={nextCrew} last={lastCrew}>
        <CrewImage img={crew.images.webp} alt={crew.name} />
      </TouchNav>
    </motion.div>
  )
}
export default Crew
