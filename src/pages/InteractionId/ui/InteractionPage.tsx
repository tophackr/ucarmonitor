import { memo } from 'react'
import { InteractionPreview } from '@/widgets/integration-preview'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/types'
import { BackButton } from '@/shared/ui'

export const InteractionPage = memo(async function InteractionPage({
    params
}: ParamsProps<CategoryProps>) {
    const { category } = await params

    return (
        <>
            <BackButton />

            <InteractionPreview category={category} />
        </>
    )
})
