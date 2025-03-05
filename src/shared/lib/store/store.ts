import { type Reducer, configureStore } from '@reduxjs/toolkit'

export function makeStore(reducer: Reducer) {
    return configureStore({ reducer })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
