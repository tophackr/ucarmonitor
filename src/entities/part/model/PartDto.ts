import {
    type InferOutput,
    enum as _enum,
    boolean,
    object,
    string,
    union
} from 'valibot'
import { carResSchema } from '@/entities/car/@x/interaction'
import { userReturnSchema } from '@/entities/user/@x/interaction'
import { baseSchema } from '@/shared/lib/store'

export enum PartOption {
    oil = 'oil',
    filter = 'filter',
    brake_pads_and_discs = 'brake_pads_and_discs',
    coolant = 'coolant',
    windshield_washer = 'windshield_washer',
    spark_plugs = 'spark_plugs'
}

export const partReqSchema = object({
    option: union([_enum(PartOption), string()]),
    isVisible: boolean()
})

export const partResSchema = object({
    ...baseSchema.entries,
    ...partReqSchema.entries,
    isDefault: boolean(),
    carId: carResSchema.entries.id,
    userId: userReturnSchema.entries.id
})

export type PartReqData = InferOutput<typeof partReqSchema>

export type PartResData = InferOutput<typeof partResSchema>
