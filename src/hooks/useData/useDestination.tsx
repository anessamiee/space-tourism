import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  lastDestination,
  nextDestination,
  selectAllDestinations,
  selectDestination,
  setDestination,
} from '../../app/reducers/destinationSlice'

import { Destination } from '../../types/Destination'

export const useDestinationState = () => {
  const destination = useAppSelector(selectDestination)
  const allDestinations = useAppSelector(selectAllDestinations)
  return { destination, allDestinations }
}
export const useDestinationDispatch = () => {
  const dispatch = useAppDispatch()
  return {
    setDestination: (destination: Destination) => dispatch(setDestination(destination)),
    nextDestination: () => dispatch(nextDestination()),
    lastDestination: () => dispatch(lastDestination()),
  }
}
