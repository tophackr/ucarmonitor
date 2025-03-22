import type { ITiresInteraction } from '@/entities/interaction'

export type TiresSizeForm = Pick<
    ITiresInteraction,
    'width' | 'height' | 'diameter'
>
export type TiresInfoForm = Omit<ITiresInteraction, keyof TiresSizeForm>
