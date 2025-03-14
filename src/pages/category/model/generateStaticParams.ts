import { type CategoryProps, InteractionCategory } from '@/entities/interaction'

type StaticParams = CategoryProps[]

export function generateStaticParams(): StaticParams {
    return Object.values(InteractionCategory).map(category => ({ category }))
}
