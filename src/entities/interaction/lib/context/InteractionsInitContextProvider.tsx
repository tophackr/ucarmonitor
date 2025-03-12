'use client'

import { type PropsWithChildren, memo } from 'react'
import { useLoadingInteractions } from '../store/useLoadingInteractions'
import { InteractionsInitContext } from './InteractionsInitContext'

export const InteractionsInitContextProvider = memo(
    function InteractionsInitContextProvider({ children }: PropsWithChildren) {
        const { isLoading } = useLoadingInteractions()

        return (
            <InteractionsInitContext.Provider value={{ isLoading }}>
                {children}
            </InteractionsInitContext.Provider>
        )
    }
)
