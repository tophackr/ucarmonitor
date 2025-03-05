import { combineReducers } from 'redux'
import { carsSliceReducer } from '@/entities/car'
import { interactionsSliceReducer } from '@/entities/interaction'

export const rootReducer = combineReducers({
    carsSlice: carsSliceReducer,
    interactionsSlice: interactionsSliceReducer
})
