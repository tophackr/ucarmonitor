import { Cell, type CellProps } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { TextSkeleton } from './TextSkeleton'

type CellSkeletonProps = Omit<CellProps, 'subhead' | 'children'>

export const CellSkeleton = memo(function CellSkeleton(
    props: CellSkeletonProps
): JSX.Element {
    return (
        <Cell
            subhead={<TextSkeleton className={'bg-subtitle mb-1'} />}
            {...props}
        >
            <TextSkeleton long />
        </Cell>
    )
})
