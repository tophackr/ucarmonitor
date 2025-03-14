import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { RootState } from '@/shared/lib/store'
import type { ICar } from '../../model/Car'
import { defaultCars, itemName } from './cars'

interface CarsState {
    value: ICar[]
}

const initialState: CarsState = {
    value: defaultCars
}

const carsSlice = createSlice({
    name: itemName,
    initialState,
    reducers: {
        setCars(
            state: WritableDraft<CarsState>,
            action: PayloadAction<ICar[]>
        ): void {
            state.value = action.payload
        }
    }
})

export const selectCars = (state: RootState) =>
    (state['carsSlice'] as CarsState).value

export const { actions: carsSliceActions, reducer: carsSliceReducer } =
    carsSlice
