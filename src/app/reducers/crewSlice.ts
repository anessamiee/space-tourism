import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import crews from '../../data/crews'
import { CrewType } from '../../types/CrewType'
import { RootState } from '../store'

type InitialState = {
  allCrews: CrewType[]
  crew: CrewType
}

const initialState: InitialState = {
  allCrews: crews,
  crew: crews[0],
}
const allCrewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    setCrew: (state, action: PayloadAction<CrewType>) => {
      state.crew = action.payload
    },
    nextCrew: (state) => {
      const index = current(state.allCrews).indexOf(current(state.crew))
      if (state.allCrews[index + 1] !== undefined) state.crew = state.allCrews[index + 1]
      else state.crew = state.allCrews[0]
    },
    lastCrew: (state) => {
      const index = current(state.allCrews).indexOf(current(state.crew))
      if (state.allCrews[index - 1] !== undefined) state.crew = state.allCrews[index - 1]
      else state.crew = state.allCrews[state.allCrews.length - 1]
    },
  },
})
export const selectCrew = (state: RootState) => state.crew.crew
export const selectallCrews = (state: RootState) => state.crew.allCrews
export const { setCrew, nextCrew, lastCrew } = allCrewSlice.actions
export default allCrewSlice.reducer
