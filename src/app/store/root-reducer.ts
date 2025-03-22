import { combineReducers } from 'redux'
import { carsSliceReducer } from '@/entities/car'
import { interactionsSliceReducer } from '@/entities/interaction'
import { repairsSliceReducer } from '@/entities/repair'

export const rootReducer = combineReducers({
    carsSlice: carsSliceReducer,
    interactionsSlice: interactionsSliceReducer,
    repairsSlice: repairsSliceReducer
})
