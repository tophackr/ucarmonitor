import { memo } from 'react'
import { InteractionForm } from '@/features/InteractionForm'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/types'
import { BackButton } from '@/shared/ui'

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
