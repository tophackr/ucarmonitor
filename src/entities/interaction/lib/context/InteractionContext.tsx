'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, createContext, memo, use } from 'react'
import type { ParamsProps } from '@/shared/types'
import { useFindInteraction } from '../../hooks/useFindInteraction'
import { InteractionCategory } from '../../model/Interaction'
import type { InteractionIdProps, InteractionProps } from '../../model/Props'

export const InteractionContext = createContext<InteractionProps>({
    interaction: {
        id: '',
        carId: '',
        type: InteractionCategory.fuel,
        date: new Date(),
        mileage: 0
    }
})

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
