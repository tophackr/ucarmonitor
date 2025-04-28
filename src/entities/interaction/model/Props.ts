import type { InteractionCategory, InteractionResData } from './InteractionDto'

export interface CategoryProps {
    category: InteractionCategory
}

export interface InteractionIdProps {
    interactionId: string
}

export interface InteractionProps {
    interaction: InteractionResData
}

export interface InteractionsProps {
    interactions: InteractionResData[]
}
