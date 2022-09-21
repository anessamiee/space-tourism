import { combineReducers, configureStore } from '@reduxjs/toolkit'
import crewSlice from './reducers/crewSlice'
import destinationSlice from './reducers/destinationSlice'
import technologySlice from './reducers/technologySlice'

const reducers = combineReducers({
  destination: destinationSlice,
  crew: crewSlice,
  technology: technologySlice,
})

export const store = configureStore({
  reducer: reducers,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
