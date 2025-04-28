import { type InferOutput, nullable, object } from 'valibot'
import { interactionResSchema } from '@/entities/interaction/@x/repair'
import { repairResSchema } from './RepairDto'

export const commonRepairResSchema = object({
    ...repairResSchema.entries,
    interaction: nullable(interactionResSchema)
})

export type CommonRepairResData = InferOutput<typeof commonRepairResSchema>
