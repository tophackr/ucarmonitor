'use client'

import { type PropsWithChildren, memo, useRef } from 'react'
import { Provider } from 'react-redux'
import { type AppStore, makeStore } from '@/shared/lib'
import { rootReducer } from './root-reducer'

export const StoreProvider = memo(function StoreProvider({
    children
}: PropsWithChildren) {
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore(rootReducer)
    }

    return <Provider store={storeRef.current}>{children}</Provider>
})
