'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, memo, use } from 'react'
import type { ParamsProps } from '@/shared/lib/dom'
import type { InteractionIdProps } from '../../model/Props'
import { InteractionContext } from './InteractionContext'
import { useFindInteraction } from './hooks/useFindInteraction'

export const InteractionContextProvider = memo(
    function InteractionContextProvider({
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
)
