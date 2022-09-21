import { motion } from 'framer-motion'
import DestinationInfo from '../components/destination/DestinationInfo'
import PlanetImg from '../components/destination/PlanetImg'
import PlanetsNav from '../components/destination/PlanetsNav'
import TouchNav from '../components/ui/Pagination/TouchNav'
import { useDestinationDispatch, useDestinationState } from '../hooks/useData/useDestination'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Destination: React.FC = () => {
  const { destination, allDestinations } = useDestinationState()
  const { nextDestination, lastDestination, setDestination } = useDestinationDispatch()
  useDocumentTitle('Destination')

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, y: 10, transition: { duration: 0.5 } }}
      className='flex flex-col lg:flex-row justify-evenly w-screen items-center'
    >
      <TouchNav next={nextDestination} last={lastDestination}>
        <PlanetImg img={destination.images.webp} alt={destination.name} />
      </TouchNav>
      <div className='w-full lg:w-[445px] flex flex-col mt-10 md:mt-14 lg:mt-0  '>
        <PlanetsNav
          allDestinations={allDestinations}
          setDestination={setDestination}
          destination={destination}
        />
        <DestinationInfo
          name={destination.name}
          description={destination.description}
          distance={destination.distance}
          travel={destination.travel}
        />
      </div>
    </motion.div>
  )
}
export default Destination
