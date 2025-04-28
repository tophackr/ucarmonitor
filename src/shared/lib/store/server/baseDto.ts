import {
    type InferOutput,
    cuid2,
    isoTimestamp,
    length,
    object,
    pipe,
    string
} from 'valibot'

export const baseSchema = object({
    id: pipe(string(), cuid2(), length(25)),
    createdAt: pipe(string(), isoTimestamp()),
    updatedAt: pipe(string(), isoTimestamp())
})

export type BaseData = InferOutput<typeof baseSchema>
