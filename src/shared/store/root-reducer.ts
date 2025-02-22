import { combineReducers } from 'redux'
import { carsSliceReducer } from '@/entities/cars'

export const rootReducer = combineReducers({
    carsSlice: carsSliceReducer
})
