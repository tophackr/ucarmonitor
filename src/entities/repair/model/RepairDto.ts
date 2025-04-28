import {
    type InferOutput,
    enum as _enum,
    boolean,
    nullable,
    object,
    string,
    union
} from 'valibot'
import { carResSchema } from '@/entities/car/@x/interaction'
import { userReturnSchema } from '@/entities/user/@x/interaction'
import { baseSchema } from '@/shared/lib/store'
import { integerMinValue } from '@/shared/lib/validation'

export enum RepairOption {
    engine_oil = 'engine_oil',
    transmission_oil = 'transmission_oil',
    oil_filter = 'oil_filter',
    air_filter = 'air_filter',
    cabin_filter = 'cabin_filter',
    front_brake_pads = 'front_brake_pads',
    rear_brake_pads = 'rear_brake_pads',
    brake_fluid = 'brake_fluid',
    front_brake_discs = 'front_brake_discs',
    rear_brake_discs = 'rear_brake_discs',
    air_conditioner_refill = 'air_conditioner_refill',
    spark_plugs = 'spark_plugs',
    coolant = 'coolant',
    alignment = 'alignment',
    timing_belt = 'timing_belt',
    fuel_filter = 'fuel_filter',
    transfer_case_oil = 'transfer_case_oil',
    differential_oil = 'differential_oil',
    car_battery = 'car_battery',
    power_steering_fluid = 'power_steering_fluid',
    clutch = 'clutch'
}

export const repairReqSchema = object({
    option: union([_enum(RepairOption), string()]),
    mileage: nullable(integerMinValue()),
    days: nullable(integerMinValue()),
    isVisible: boolean()
})

export const repairResSchema = object({
    ...baseSchema.entries,
    ...repairReqSchema.entries,
    isDefault: boolean(),
    carId: carResSchema.entries.id,
    userId: userReturnSchema.entries.id
})

export type RepairReqData = InferOutput<typeof repairReqSchema>

export type RepairResData = InferOutput<typeof repairResSchema>
