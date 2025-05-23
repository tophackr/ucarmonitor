'use client'

import { type JSX, memo, use } from 'react'
import {
    type CategoryProps,
    useInteractionContext
} from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { BackButton } from '@/shared/ui/tma'
import { DynamicInteractionForm } from '../DynamicInteractionForm'

export const InteractionEditPage = memo(function InteractionEditPage({
    params
}: ParamsProps<CategoryProps>): JSX.Element {
    const { category } = use(params)

    const { interaction } = useInteractionContext()

    return (
        <>
            <BackButton />

            <DynamicInteractionForm
                category={category}
                interaction={interaction}
            />
        </>
    )
})
