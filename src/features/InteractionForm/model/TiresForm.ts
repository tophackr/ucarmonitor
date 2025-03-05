import type { ITires } from '@/entities/interaction'

export type TiresSizeForm = Pick<ITires, 'width' | 'height' | 'diameter'>
export type TiresInfoForm = Omit<ITires, keyof TiresSizeForm>
