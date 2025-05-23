'use client'

import { type JSX, type PropsWithChildren, memo, useRef } from 'react'
import { Provider } from 'react-redux'
import { type AppStore, makeStore } from '@/shared/lib/store'
import { rootReducer } from './root-reducer'

export const StoreProvider = memo(function StoreProvider({
    children
}: PropsWithChildren): JSX.Element {
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore(rootReducer)
    }

    return <Provider store={storeRef.current}>{children}</Provider>
})
