import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { RootState } from '@/shared/lib/store'
import type { IRepair } from '../../model/Repair'
import { defaultRepair } from './constants/default'

interface RepairState {
    value: IRepair[]
}

const initialState: RepairState = {
    value: defaultRepair
}

const repairsSlice = createSlice({
    name: 'repair',
    initialState,
    reducers: {
        setRepairs(
            state: WritableDraft<RepairState>,
            action: PayloadAction<IRepair[]>
        ): void {
            state.value = action.payload
        }
    }
})

export const selectRepairs = (state: RootState) =>
    (state['repairsSlice'] as RepairState).value

export const { actions: repairsSliceActions, reducer: repairsSliceReducer } =
    repairsSlice
