'use client'

import { type JSX, type PropsWithChildren, memo } from 'react'
import { useLoadingInteractions } from '../store/hooks/useLoadingInteractions'
import { InteractionsInitContext } from './InteractionsInitContext'

export const InteractionsInitContextProvider = memo(
    function InteractionsInitContextProvider({
        children
    }: PropsWithChildren): JSX.Element {
        const { isLoading } = useLoadingInteractions()

        return (
            <InteractionsInitContext.Provider value={{ isLoading }}>
                {children}
            </InteractionsInitContext.Provider>
        )
    }
)
