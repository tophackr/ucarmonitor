'use client'

import { use } from 'react'
import { InteractionForm } from '@/features/InteractionForm'
import {
    type CategoryProps,
    useInteractionContext
} from '@/entities/interaction'
import type { ParamsProps } from '@/shared/types'
import { BackButton } from '@/shared/ui'

export function InteractionEditPage({ params }: ParamsProps<CategoryProps>) {
    const { category } = use(params)

    const { interaction } = useInteractionContext()

    return (
        <>
            <BackButton />

            <InteractionForm
                category={category}
                interaction={interaction}
            />
        </>
    )
}
