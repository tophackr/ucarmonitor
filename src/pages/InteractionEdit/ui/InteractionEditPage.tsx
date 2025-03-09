'use client'

import { memo, use } from 'react'
import { InteractionForm } from '@/features/InteractionForm'
import {
    type CategoryProps,
    useInteractionContext
} from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { useBackButton } from '@/shared/ui/tma'

export const InteractionEditPage = memo(function InteractionEditPage({
    params
}: ParamsProps<CategoryProps>) {
    const { category } = use(params)

    const { interaction } = useInteractionContext()

    useBackButton()

    return (
        <InteractionForm
            category={category}
            interaction={interaction}
        />
    )
})
