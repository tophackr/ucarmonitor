import { AvatarSkeleton, CellSkeleton, PulseSkeletonLayout } from '@/shared/ui'

export function Loading() {
    return (
        <PulseSkeletonLayout>
            {Array.from({ length: 5 }).map((_, index) => (
                <CellSkeleton
                    key={index}
                    before={<AvatarSkeleton size={28} />}
                />
            ))}
        </PulseSkeletonLayout>
    )
}
