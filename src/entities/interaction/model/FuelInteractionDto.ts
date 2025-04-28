import { enum as _enum, boolean, nullable, object } from 'valibot'
import { floatMinValueOrNan } from '@/shared/lib/validation'

export enum FuelGrade {
    ai80 = 'ai80',
    ai92 = 'ai92',
    ai95 = 'ai95',
    ai95_plus = 'ai95_plus',
    ai98 = 'ai98',
    ai98_plus = 'ai98_plus',
    ai100 = 'ai100',
    diesel = 'diesel',
    diesel_plus = 'diesel_plus',
    gas = 'gas',
    electric = 'electric'
}

export const commonFuelInteractionSchema = object({
    fuelGrade: _enum(FuelGrade),
    capacity: nullable(floatMinValueOrNan()),
    price: nullable(floatMinValueOrNan()),
    beforeRefueling: nullable(floatMinValueOrNan()),
    afterRefueling: nullable(floatMinValueOrNan()),
    capacityFull: nullable(boolean())
})
