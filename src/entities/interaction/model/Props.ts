import type { IInteraction, InteractionCategory } from './Interaction'

export interface CategoryProps {
    category: InteractionCategory
}

export interface InteractionIdProps {
    interactionId: string
}

export interface InteractionProps {
    interaction: IInteraction
}
