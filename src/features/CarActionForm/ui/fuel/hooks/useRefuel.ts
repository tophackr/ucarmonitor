'use client'

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useWatchForm } from '@/shared/hooks'
import type { FuelForm } from '../types/FuelForm'

const toFixedNumber = (value: number, digit: number = 2) =>
    Number(value.toFixed(digit))

export function useRefuel(fuelCapacity: number = 45) {
    const { setValue, watch } = useFormContext<FuelForm>()

    const [beforeRefuel, setBeforeRefuel] = useState(0)
    const [afterRefuel, setAfterRefuel] = useState(0)

    const onBeforeChange = (value: number) => {
        setValue('beforeRefueling', toFixedNumber(value * 0.01 * fuelCapacity))
    }

    const onAfterChange = (value: number) => {
        setValue('afterRefueling', toFixedNumber(value * 0.01 * fuelCapacity))
    }

    const onFullChange = (value: boolean) => {
        if (!value) {
            setValue('afterRefueling', fuelCapacity)
        }
    }

    const [watchAfterRefueling, watchCapacityFull] = watch([
        'afterRefueling',
        'capacityFull'
    ])

    useEffect(() => {
        if (watchAfterRefueling !== fuelCapacity && watchCapacityFull) {
            setValue('capacityFull', !watchCapacityFull)
        }
    }, [watchAfterRefueling, watchCapacityFull, fuelCapacity, setValue])

    const onWatchCallback = ({ beforeRefueling, afterRefueling }: FuelForm) => {
        if (beforeRefuel !== beforeRefueling) {
            const beforeNumber = +beforeRefueling

            setBeforeRefuel(
                toFixedNumber(((beforeNumber || 0) / fuelCapacity) * 100, 0)
            )
        }

        if (afterRefuel !== afterRefueling) {
            const afterNumber = +afterRefueling

            setAfterRefuel(
                toFixedNumber(((afterNumber || 0) / fuelCapacity) * 100, 0)
            )
        }
    }

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
