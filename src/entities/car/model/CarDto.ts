import {
    type InferInput,
    type InferOutput,
    enum as _enum,
    boolean,
    nullable,
    object,
    optional,
    string
} from 'valibot'
import { userResSchema } from '@/entities/user/@x/car'
import { baseSchema } from '@/shared/lib/store'
import {
    integerMinValue,
    integerMinValueOrNan,
    stringMinLength
} from '@/shared/lib/validation'

export enum FuelType {
    gasoline = 'gasoline',
    gas = 'gas',
    hybrid = 'hybrid',
    diesel = 'diesel',
    electric = 'electric'
}

export enum OdometerUnits {
    kilometer = 'kilometer',
    mile = 'mile'
}

export const carReqSchema = object({
    isDefault: optional(boolean()),
    brand: string(),
    model: nullable(stringMinLength()),
    name: nullable(stringMinLength()),
    year: nullable(integerMinValueOrNan(1750)),
    fuelType: nullable(_enum(FuelType)),
    fuelCapacity: nullable(integerMinValueOrNan()),
    mileage: integerMinValue(),
    odometerUnits: _enum(OdometerUnits),
    engineHoursEnabled: boolean(),
    engineHours: nullable(integerMinValueOrNan())
})

export const carResSchema = object({
    ...baseSchema.entries,
    ...carReqSchema.entries,
    isDefault: boolean(),
    userId: userResSchema.entries.id
})

export type CarReqData = InferInput<typeof carReqSchema>

export type CarResData = InferOutput<typeof carResSchema>
