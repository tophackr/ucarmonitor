import { CarCellSkeleton } from '@/entities/car'
import { PulseSkeletonLayout } from '@/shared/ui'

export function Loading() {
    return (
        <PulseSkeletonLayout>
            {Array.from({ length: 5 }).map((_, index) => (
                <CarCellSkeleton key={index} />
            ))}
        </PulseSkeletonLayout>
    )
}
