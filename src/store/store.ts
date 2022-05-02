import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { companiesSlice } from './companies/companiesSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createAPI } from '../utils/api'

export const api = createAPI()

export const rootReducer = combineReducers({
  [companiesSlice.name]: companiesSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
