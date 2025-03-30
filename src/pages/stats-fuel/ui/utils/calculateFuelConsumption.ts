import { toFixedNumber } from '@/shared/lib/number'
import type { FuelData } from '../types/FuelData'

interface CalculateFuelConsumptionReturn {
    fuelPer100km: number
    costPerKm: number
    distancePerLiter: number
    costPerLiter: number
}

export function calculateFuelConsumption(
    data: FuelData
): CalculateFuelConsumptionReturn {
    const fuelPer100km = (data.fuel * 100) / data.distance
    const costPerKm = data.cost / data.distance
    const distancePerLiter = data.distance / data.fuel
    const costPerLiter = data.cost / data.fuel

    return {
        fuelPer100km: toFixedNumber(fuelPer100km),
        costPerKm: toFixedNumber(costPerKm),
        distancePerLiter: toFixedNumber(distancePerLiter),
        costPerLiter: toFixedNumber(costPerLiter)
    }
}
