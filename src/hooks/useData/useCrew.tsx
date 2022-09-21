import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  selectallCrews,
  selectCrew,
  nextCrew,
  lastCrew,
  setCrew,
} from '../../app/reducers/crewSlice'

import { CrewType } from '../../types/CrewType'

export const useCrewState = () => {
  const crew = useAppSelector(selectCrew)
  const allCrews = useAppSelector(selectallCrews)
  return { crew, allCrews }
}
export const useCrewDispatch = () => {
  const dispatch = useAppDispatch()
  return {
    setCrew: (crew: CrewType) => dispatch(setCrew(crew)),
    nextCrew: () => dispatch(nextCrew()),
    lastCrew: () => dispatch(lastCrew()),
  }
}
