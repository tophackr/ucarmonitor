'use client'

import { useCallback, useState } from 'react'
import type { UseFormWatch } from 'react-hook-form'
import { useWatchForm } from '@/shared/lib'
import type { CarMileageForm } from '../types/FormContext'

interface UseEngineHoursReturns {
    engineEnabled: boolean
}

export function useEngineHours(
    watch: UseFormWatch<CarMileageForm>,
    engineHours: boolean
): UseEngineHoursReturns {
    const [engineEnabled, setEngineEnabled] = useState<boolean>(engineHours)

    const engineCallback = useCallback(
        ({ engineHoursEnabled }: CarMileageForm) => {
            if (engineHoursEnabled === engineEnabled) {
                return
            }

            setEngineEnabled(engineHoursEnabled)
        },
        [engineEnabled]
    )

    useWatchForm({
        watch,
        callback: engineCallback
    })

    return { engineEnabled }
}
