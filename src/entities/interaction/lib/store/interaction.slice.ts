import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { RootState } from '@/shared/lib/store'
import type { IInteraction } from '../../model/Interaction'
import { defaultInteraction } from './interaction'

interface InteractionState {
    value: IInteraction[]
}

const initialState: InteractionState = {
    value: defaultInteraction
}

const interactionsSlice = createSlice({
    name: 'interaction',
    initialState,
    reducers: {
        setInteractions(
            state: WritableDraft<InteractionState>,
            action: PayloadAction<IInteraction[]>
        ) {
            state.value = action.payload
        }
    }
})

export const selectInteractions = (state: RootState) =>
    (state['interactionsSlice'] as InteractionState).value

export const {
    actions: interactionsSliceActions,
    reducer: interactionsSliceReducer
} = interactionsSlice
