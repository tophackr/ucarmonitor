import { type JSX, memo } from 'react'
import { InteractionForm } from '@/features/interaction-form'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { BackButton } from '@/shared/ui/tma'

export const InteractionNewPage = memo(async function InteractionNewPage({
    params
}: ParamsProps<CategoryProps>): Promise<JSX.Element> {
    const { category } = await params

    return (
        <>
            <BackButton />

            <InteractionForm category={category} />
        </>
    )
})
