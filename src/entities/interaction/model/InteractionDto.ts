import {
    type InferOutput,
    isoTimestamp,
    literal,
    nullable,
    object,
    picklist,
    pipe,
    string,
    variant
} from 'valibot'
import { carResSchema } from '@/entities/car/@x/interaction'
import { userResSchema } from '@/entities/user/@x/car'
import { baseSchema } from '@/shared/lib/store'
import {
    integerMinValue,
    integerMinValueOrNan,
    stringMinLength
} from '@/shared/lib/validation'
import { commonFuelInteractionSchema } from './FuelInteractionDto'
import { commonPartInteractionSchema } from './PartInteractionDto'
import { commonRepairInteractionSchema } from './RepairInteractionDto'
import { commonWheelInteractionSchema } from './WheelInteractionDto'

export enum InteractionCategory {
    mileage = 'mileage',
    parking = 'parking',
    toll_road = 'toll_road',
    taxi = 'taxi',
    sober_driver = 'sober_driver',
    alarm_system = 'alarm_system',
    fuel = 'fuel',
    wash = 'wash',
    maintenance = 'maintenance',
    tire_service = 'tire_service',
    repair = 'repair',
    part = 'part',
    purchase_wheels = 'purchase_wheels',
    tow_truck = 'tow_truck',
    insurance = 'insurance',
    tax = 'tax',
    state_inspection = 'state_inspection',
    fine = 'fine',
    car_purchase = 'car_purchase',
    loan_repayment = 'loan_repayment',
    leasing = 'leasing',
    car_purchases = 'car_purchases',
    tuning = 'tuning',
    driver_salary = 'driver_salary'
}

const relationsResSchema = object({
    carId: carResSchema.entries.id,
    userId: userResSchema.entries.id
})

const commonInteractionSchema = object({
    type: picklist(
        Object.values(InteractionCategory).filter(
            value =>
                ![
                    InteractionCategory.fuel,
                    InteractionCategory.maintenance,
                    InteractionCategory.repair,
                    InteractionCategory.part,
                    InteractionCategory.purchase_wheels
                ].includes(value)
        )
    ),
    date: pipe(string(), isoTimestamp()),
    mileage: nullable(integerMinValueOrNan()),
    amount: nullable(integerMinValueOrNan()),
    engineHours: nullable(integerMinValue()),
    description: nullable(stringMinLength())
})

const commonInteractionResSchema = object({
    ...baseSchema.entries,
    ...commonInteractionSchema.entries,
    ...relationsResSchema.entries
})

const fuelInteractionReqSchema = object({
    ...commonInteractionSchema.entries,
    type: literal(InteractionCategory.fuel),
    data: commonFuelInteractionSchema
})

const fuelInteractionResSchema = object({
    ...baseSchema.entries,
    ...fuelInteractionReqSchema.entries,
    ...relationsResSchema.entries
})

const repairInteractionReqSchema = object({
    ...commonInteractionSchema.entries,
    type: picklist([
        InteractionCategory.maintenance,
        InteractionCategory.repair
    ]),
    data: commonRepairInteractionSchema
})

const repairInteractionResSchema = object({
    ...baseSchema.entries,
    ...repairInteractionReqSchema.entries,
    ...relationsResSchema.entries
})

const partInteractionReqSchema = object({
    ...commonInteractionSchema.entries,
    type: literal(InteractionCategory.part),
    data: commonPartInteractionSchema
})

const partInteractionResSchema = object({
    ...baseSchema.entries,
    ...partInteractionReqSchema.entries,
    ...relationsResSchema.entries
})

const wheelInteractionReqSchema = object({
    ...commonInteractionSchema.entries,
    type: literal(InteractionCategory.purchase_wheels),
    data: commonWheelInteractionSchema
})

const wheelInteractionResSchema = object({
    ...baseSchema.entries,
    ...wheelInteractionReqSchema.entries,
    ...relationsResSchema.entries
})

export const interactionReqSchema = variant('type', [
    commonInteractionSchema,
    fuelInteractionReqSchema,
    repairInteractionReqSchema,
    partInteractionReqSchema,
    wheelInteractionReqSchema
])

export const interactionResSchema = variant('type', [
    commonInteractionResSchema,
    fuelInteractionResSchema,
    repairInteractionResSchema,
    partInteractionResSchema,
    wheelInteractionResSchema
])

export type InteractionReqData = InferOutput<typeof commonInteractionSchema>

type CommonInteractionData = InferOutput<typeof commonInteractionResSchema>

export type FuelInteractionData = InferOutput<typeof fuelInteractionResSchema>

export type RepairInteractionData = InferOutput<
    typeof repairInteractionResSchema
>

export type PartInteractionData = InferOutput<typeof partInteractionResSchema>

export type WheelInteractionData = InferOutput<typeof wheelInteractionResSchema>

export type InteractionResData =
    | CommonInteractionData
    | FuelInteractionData
    | RepairInteractionData
    | PartInteractionData
    | WheelInteractionData
