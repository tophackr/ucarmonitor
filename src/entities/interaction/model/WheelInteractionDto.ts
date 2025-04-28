import {
    enum as _enum,
    literal,
    minValue,
    nullable,
    number,
    object,
    pipe,
    variant
} from 'valibot'
import { integerMinValue, stringMinLength } from '@/shared/lib/validation'

export enum WheelType {
    tire = 'tire',
    rim = 'rim'
}

export enum TireType {
    summer = 'summer',
    winter = 'winter',
    all_season = 'all_season'
}

export enum RimType {
    forged = 'forged',
    cast = 'cast',
    stamped = 'stamped'
}

const commonFields = object({
    brand: nullable(stringMinLength()),
    model: nullable(stringMinLength()),
    width: nullable(pipe(number(), minValue(0))),
    height: nullable(integerMinValue()),
    diameter: nullable(integerMinValue())
})

const tireSchema = object({
    ...commonFields.entries,
    wheelType: literal(WheelType.tire),
    tireType: nullable(_enum(TireType))
})

const rimSchema = object({
    ...commonFields.entries,
    wheelType: literal(WheelType.rim),
    rimType: nullable(_enum(RimType))
})

export const commonWheelInteractionSchema = variant('wheelType', [
    tireSchema,
    rimSchema
])
