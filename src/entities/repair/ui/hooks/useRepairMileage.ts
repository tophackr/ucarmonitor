import { useFormatter } from 'next-intl'
import { useCarContext } from '@/entities/car/@x/repair'
import { getIntlUnit } from '@/shared/i18n'
import { getPercent } from '@/shared/lib/number'

interface UseRepairMileageReturn {
    mileage?: string
    percent: number
}

export function useRepairMileage(
    repairMileage?: number,
    interactionMileage?: number
): UseRepairMileageReturn {
    const formatter = useFormatter()

    const { car, mileage } = useCarContext()

    if (!repairMileage) {
        return {
            mileage: undefined,
            percent: 0
        }
    }

    const nextReplacementMileage =
        interactionMileage && interactionMileage + repairMileage - mileage
    const nextReplacementMileageOrZero = nextReplacementMileage ?? 0
    const nextReplacementMileageFixed = Math.min(
        repairMileage,
        nextReplacementMileageOrZero
    )

    const nextMileage = getIntlUnit(
        formatter,
        nextReplacementMileageFixed,
        car.odometerUnits
    )
    const mileagePercent = getPercent(
        nextReplacementMileageFixed
            ? repairMileage - nextReplacementMileageFixed
            : 0,
        repairMileage
    )

    return { mileage: nextMileage, percent: mileagePercent }
}
