import { array, object } from 'valibot'
import { partResSchema } from '@/entities/part/@x/interaction'

export const commonPartInteractionSchema = object({
    ids: array(partResSchema.entries.id)
})
