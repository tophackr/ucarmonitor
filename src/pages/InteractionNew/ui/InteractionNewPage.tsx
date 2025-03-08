import { memo } from 'react'
import { InteractionForm } from '@/features/InteractionForm'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { BackButton } from '@/shared/ui/tma'

export const InteractionNewPage = memo(async function InteractionNewPage({
    params
}: ParamsProps<CategoryProps>) {
    const { category } = await params

    return (
        <>
            <BackButton />

            <InteractionForm category={category} />
        </>
    )
})
