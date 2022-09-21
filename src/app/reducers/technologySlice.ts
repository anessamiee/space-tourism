import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import technologies from '../../data/technologies'
import { TechnologyType } from '../../types/TechnologyType'
import { RootState } from '../store'

type InitialState = {
  allTechnologies: TechnologyType[]
  technology: TechnologyType
}

const initialState: InitialState = {
  allTechnologies: technologies,
  technology: technologies[0],
}
const allTechnologieSlice = createSlice({
  name: 'technology',
  initialState,
  reducers: {
    setTechnology: (state, action: PayloadAction<TechnologyType>) => {
      state.technology = action.payload
    },
    nextTechnology: (state) => {
      const index = current(state.allTechnologies).indexOf(current(state.technology))
      if (state.allTechnologies[index + 1] !== undefined)
        state.technology = state.allTechnologies[index + 1]
      else state.technology = state.allTechnologies[0]
    },
    lastTechnology: (state) => {
      const index = current(state.allTechnologies).indexOf(current(state.technology))
      if (state.allTechnologies[index - 1] !== undefined)
        state.technology = state.allTechnologies[index - 1]
      else state.technology = state.allTechnologies[state.allTechnologies.length - 1]
    },
  },
})
export const selectTechnology = (state: RootState) => state.technology.technology
export const selectallTechnologies = (state: RootState) => state.technology.allTechnologies
export const { setTechnology, nextTechnology, lastTechnology } = allTechnologieSlice.actions
export default allTechnologieSlice.reducer
