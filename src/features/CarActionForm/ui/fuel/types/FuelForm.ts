import type { FuelGrade } from './FuelGrade'

export interface FuelForm {
    fuelGrade: FuelGrade
    capacity?: number
    price?: number
    beforeRefueling: number
    afterRefueling: number
    capacityFull?: boolean
}
