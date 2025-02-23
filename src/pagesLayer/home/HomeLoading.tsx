import { CarCellSkeleton } from '@/entities/cars'
import { PulseSkeletonLayout } from '@/shared/ui'

export function HomeLoading() {
    return (
        <PulseSkeletonLayout>
            {Array.from({ length: 5 }).map((_, index) => (
                <CarCellSkeleton key={index} />
            ))}
        </PulseSkeletonLayout>
    )
}
