'use client'

import { memo, use } from 'react'
import { InteractionForm } from '@/features/InteractionForm'
import {
    type CategoryProps,
    useInteractionContext
} from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { BackButton } from '@/shared/ui'

export const InteractionEditPage = memo(function InteractionEditPage({
    params
}: ParamsProps<CategoryProps>) {
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
})
