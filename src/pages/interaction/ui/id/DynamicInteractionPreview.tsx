'use client'

import dynamic from 'next/dynamic'
import { InteractionFormSkeleton } from '@/features/interaction-form'

export const DynamicInteractionPreview = dynamic(
    () =>
        import('@/widgets/integration-preview').then(c => c.InteractionPreview),
    {
        loading: () => <InteractionFormSkeleton />
    }
)
