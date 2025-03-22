import { type JSX, memo } from 'react'
import { InteractionPreview } from '@/widgets/integration-preview'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'
import { BackButton } from '@/shared/ui/tma'

export const InteractionIdPage = memo(async function InteractionIdPage({
    params
}: ParamsProps<CategoryProps>): Promise<JSX.Element> {
    const { category } = await params

    return (
        <>
            <BackButton />

            <InteractionPreview category={category} />
        </>
    )
})
