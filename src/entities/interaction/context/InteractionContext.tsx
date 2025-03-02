'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, createContext, use } from 'react'
import type { ParamsProps } from '@/shared/types'
import { useFindInteraction } from '../hooks'
import type { InteractionIdProps, InteractionProps } from '../types/Props'

export const InteractionContext = createContext<InteractionProps>({
    interaction: undefined
})

export function InteractionContextProvider({
    children,
    params
}: PropsWithChildren<ParamsProps<InteractionIdProps>>) {
    const { interactionId } = use(params)

    const interaction = useFindInteraction(interactionId)

    if (!interaction) {
        notFound()
    }

    return (
        <InteractionContext.Provider value={{ interaction }}>
            {children}
        </InteractionContext.Provider>
    )
}
