import { InteractionCategory } from '@/entities/interaction'

export function generateStaticParams() {
    return Object.values(InteractionCategory).map(category => ({ category }))
}
