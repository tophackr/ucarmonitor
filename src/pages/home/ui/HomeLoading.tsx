import {
    AvatarSkeleton,
    CellSkeleton,
    PulseSkeletonLayout
} from '@/shared/ui/skeleton'

export function HomeLoading() {
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
