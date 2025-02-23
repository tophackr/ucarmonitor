import { Cell } from '@telegram-apps/telegram-ui'
import { AvatarSkeleton, TextSkeleton } from '@/shared/ui'

export function CarCellSkeleton() {
    return (
        <Cell
            before={<AvatarSkeleton size={28} />}
            subtitle={<TextSkeleton className={'bg-secondary w-24'} />}
        >
            <TextSkeleton className={'bg-hint w-32 mb-2'} />
        </Cell>
    )
}
