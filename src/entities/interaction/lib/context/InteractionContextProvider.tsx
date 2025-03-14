'use client'

import { notFound } from 'next/navigation'
import { type JSX, type PropsWithChildren, memo, use } from 'react'
import type { ParamsProps } from '@/shared/lib/dom'
import type { InteractionIdProps } from '../../model/Props'
import { useFindInteraction } from '../store/hooks/useFindInteraction'
import { InteractionContext } from './InteractionContext'

export const InteractionContextProvider = memo(
    function InteractionContextProvider({
        children,
        params
    }: PropsWithChildren<ParamsProps<InteractionIdProps>>): JSX.Element {
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
