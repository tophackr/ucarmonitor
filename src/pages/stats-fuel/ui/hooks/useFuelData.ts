'use client'

import { useMemo } from 'react'
import type { FuelData } from '../types/FuelData'
import { useFuelInteractions } from './useFuelInteractions'

interface GroupedMonths {
    [month: string]: FuelData
}

const initFuelData: FuelData = { distance: 0, fuel: 0, allFuel: 0, cost: 0 }

export function useFuelData(month: true): GroupedMonths

export function useFuelData(month?: false): FuelData

export function useFuelData(month: boolean = false): GroupedMonths | FuelData {
    const interactions = useFuelInteractions()

    const fuelData = useMemo(() => {
        if (!interactions.length) {
            return month ? {} : { ...initFuelData }
        }

        let previousMileage: number | null = null
        const monthsData: Record<string, FuelData> = {}
        const total: FuelData = { ...initFuelData }

        for (let i = interactions.length - 1; i >= 0; i--) {
            const {
                date: iDate,
                amount,
                mileage,
                data: { capacity, price }
            } = interactions[i]

            const fuelToAdd =
                capacity !== null
                    ? Number(capacity)
                    : price !== null && price !== 0
                      ? Number((amount ?? 0) / price)
                      : 0

            const distance =
                previousMileage !== null && mileage !== null
                    ? mileage - previousMileage
                    : 0

            if (previousMileage !== null && mileage !== null) {
                total.distance += distance
                total.cost += Number(amount ?? 0)
                total.fuel += fuelToAdd
            }

            total.allFuel += fuelToAdd

            if (month) {
                const date = new Date(iDate)
                const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`

                if (!monthsData[monthKey]) {
                    monthsData[monthKey] = { ...initFuelData }
                }

                if (previousMileage !== null && mileage !== null) {
                    monthsData[monthKey].distance += distance
                    monthsData[monthKey].cost += Number(amount ?? 0)
                    monthsData[monthKey].fuel += fuelToAdd
                }

                monthsData[monthKey].allFuel += fuelToAdd
            }

            previousMileage = mileage ?? previousMileage
        }

        return month ? monthsData : total
    }, [interactions, month])

    return fuelData
}
