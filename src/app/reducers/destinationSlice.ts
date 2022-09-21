import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import destinations from '../../data/destinations'
import { Destination } from '../../types/Destination'
import { RootState } from '../store'

type InitialState = {
  allDestinations: Destination[]
  destination: Destination
}

const initialState: InitialState = {
  allDestinations: destinations,
  destination: destinations[0],
}
const allDestinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    setDestination: (state, action: PayloadAction<Destination>) => {
      state.destination = action.payload
    },
    nextDestination: (state) => {
      const index = current(state.allDestinations).indexOf(current(state.destination))
      if (state.allDestinations[index + 1] !== undefined)
        state.destination = state.allDestinations[index + 1]
      else state.destination = state.allDestinations[0]
    },
    lastDestination: (state) => {
      const index = current(state.allDestinations).indexOf(current(state.destination))
      if (state.allDestinations[index - 1] !== undefined)
        state.destination = state.allDestinations[index - 1]
      else state.destination = state.allDestinations[state.allDestinations.length - 1]
    },
  },
})
export const selectDestination = (state: RootState) => state.destination.destination
export const selectAllDestinations = (state: RootState) => state.destination.allDestinations
export const { setDestination, lastDestination, nextDestination } = allDestinationSlice.actions
export default allDestinationSlice.reducer
