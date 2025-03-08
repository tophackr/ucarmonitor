'use client'

import { useCallback, useState } from 'react'
import type { UseFormWatch } from 'react-hook-form'
import type { CarOdometerUnits } from '@/entities/car'
import { useWatchForm } from '@/shared/lib/form'
import type { CarMileageForm } from '../types/FormContext'

interface UseOdometerUnitsReturns {
    unit: CarOdometerUnits
}

export function useOdometerUnits(
    watch: UseFormWatch<CarMileageForm>,
    odometerUnits: CarOdometerUnits
): UseOdometerUnitsReturns {
    const [unit, setUnit] = useState<CarOdometerUnits>(odometerUnits)

    const unitCallback = useCallback(
        ({ odometerUnits }: CarMileageForm) => {
            if (odometerUnits === unit) {
                return
            }

            setUnit(odometerUnits)
        },
        [unit]
    )

    useWatchForm({
        watch,
        callback: unitCallback
    })

    return { unit }
}
