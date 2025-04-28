import {
    type InferInput,
    type InferOutput,
    enum as _enum,
    minLength,
    object,
    pipe,
    string
} from 'valibot'
import { baseSchema } from '@/shared/lib/store'

export enum Language {
    ru = 'ru',
    en = 'en'
}

export const userReqSchema = object({
    language: _enum(Language),
    timezone: string()
})

export const userResSchema = object({
    ...baseSchema.entries,
    id: pipe(string(), minLength(1))
})

export type UserReqData = InferInput<typeof userReqSchema>

export type UserResData = InferOutput<typeof userResSchema>
