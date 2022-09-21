import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  selectallTechnologies,
  selectTechnology,
  nextTechnology,
  lastTechnology,
  setTechnology,
} from '../../app/reducers/technologySlice'

import { TechnologyType } from '../../types/TechnologyType'

export const useTechnologyState = () => {
  const technology = useAppSelector(selectTechnology)
  const allTechnologies = useAppSelector(selectallTechnologies)
  return { technology, allTechnologies }
}
export const useTechnologyDispatch = () => {
  const dispatch = useAppDispatch()
  return {
    setTechnology: (technology: TechnologyType) => dispatch(setTechnology(technology)),
    nextTechnology: () => dispatch(nextTechnology()),
    lastTechnology: () => dispatch(lastTechnology()),
  }
}
