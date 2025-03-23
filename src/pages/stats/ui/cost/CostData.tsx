import { type JSX, memo } from 'react'
import type { InteractionCategory } from '@/entities/interaction'
import { ListSection } from '@/shared/ui'
import { CostCell } from './CostCell'
import type { InteractionDataProps } from './types/InteractionData'

export const CostData = memo(function CostData({
    data,
    totalCount
}: InteractionDataProps): JSX.Element {
    return (
        <ListSection>
            {data.map(([key, value]) => (
                <CostCell
                    key={key}
                    title={key as InteractionCategory}
                    value={value}
                    totalCount={totalCount}
                />
            ))}
        </ListSection>
    )
})
