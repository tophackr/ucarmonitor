'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IFuelInteraction } from '@/entities/interaction'
import { getPercent } from '@/shared/lib/number'
import { useWatchForm } from '@/shared/ui/form'
import { getCapacity } from '../../model/getCapacity'

interface UseRefuelReturn {
    beforeRefuel: number
    onBeforeChange: (value: number) => void
    afterRefuel: number
    onAfterChange: (value: number) => void
    onFullChange: (value: boolean) => void
}

export function useRefuel(fuelCapacity: number = 45): UseRefuelReturn {
    const { setValue, watch } = useFormContext<IFuelInteraction>()

    const [beforeRefuel, setBeforeRefuel] = useState(0)
    const [afterRefuel, setAfterRefuel] = useState(0)

    const isFirstRender = useRef(false)

    const onBeforeChange = useCallback(
        (value: number) => {
            setValue('beforeRefueling', getCapacity(value, fuelCapacity))
        },
        [fuelCapacity, setValue]
    )

    const onAfterChange = useCallback(
        (value: number) => {
            setValue('afterRefueling', getCapacity(value, fuelCapacity))
        },
        [fuelCapacity, setValue]
    )

    const onFullChange = useCallback(
        (value: boolean) => {
            if (!value) {
                setValue('afterRefueling', fuelCapacity)
            }
        },
        [fuelCapacity, setValue]
    )

    const [watchBeforeRefueling, watchAfterRefueling, watchCapacityFull] =
        watch(['beforeRefueling', 'afterRefueling', 'capacityFull'])

    useEffect(() => {
        if (isFirstRender.current) {
            return
        }

        isFirstRender.current = true

        setBeforeRefuel(getPercent(watchBeforeRefueling, fuelCapacity))
        setAfterRefuel(getPercent(watchAfterRefueling, fuelCapacity))
    }, [watchBeforeRefueling, watchAfterRefueling, fuelCapacity])

    useEffect(() => {
        if (watchAfterRefueling !== fuelCapacity && watchCapacityFull) {
            setValue('capacityFull', !watchCapacityFull)
        }
    }, [watchAfterRefueling, watchCapacityFull, fuelCapacity, setValue])

    const onWatchCallback = useCallback(
        ({ beforeRefueling, afterRefueling }: IFuelInteraction) => {
            if (beforeRefuel !== beforeRefueling) {
                setBeforeRefuel(getPercent(beforeRefueling, fuelCapacity))
            }

            if (afterRefuel !== afterRefueling) {
                setAfterRefuel(getPercent(afterRefueling, fuelCapacity))
            }
        },
        [afterRefuel, beforeRefuel, fuelCapacity]
    )

    useWatchForm({
        watch,
        callback: onWatchCallback
    })

    return {
        beforeRefuel,
        onBeforeChange,
        afterRefuel,
        onAfterChange,
        onFullChange
    }
}
