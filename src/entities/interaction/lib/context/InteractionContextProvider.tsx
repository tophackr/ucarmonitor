'use client'

import { notFound } from 'next/navigation'
import { type JSX, type PropsWithChildren, memo, use, useMemo } from 'react'
import type { CarIdProps } from '@/entities/car/@x/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { useFindOneInteractionQuery } from '../../api/interactionApi'
import type { InteractionIdProps } from '../../model/Props'
import { InteractionFormSkeleton } from '../../ui/InteractionFormSkeleton'
import { InteractionContext } from './InteractionContext'

export const InteractionContextProvider = memo(
    function InteractionContextProvider({
        children,
        params
    }: PropsWithChildren<
        ParamsProps<CarIdProps & InteractionIdProps>
    >): JSX.Element {
        const { carId, interactionId } = use(params)

        const stableId = useMemo(
            () => ({ carId, interactionId }),
            [carId, interactionId]
        )

        const {
            data: interaction,
            isLoading,
            isError,
            error
        } = useFindOneInteractionQuery(stableId)

        if (isError) console.error('InteractionContextProvider', error)

        if (isLoading) return <InteractionFormSkeleton />

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
