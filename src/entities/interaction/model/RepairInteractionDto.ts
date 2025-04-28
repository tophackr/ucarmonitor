import { array, object } from 'valibot'
import { repairResSchema } from '@/entities/repair/@x/interaction'

export const commonRepairInteractionSchema = object({
    ids: array(repairResSchema.entries.id)
})
