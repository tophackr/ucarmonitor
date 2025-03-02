import type { InteractionCategory } from '@/entities/interaction'
import { pagesRoute } from '@/shared/routes'

export const actionsRoute = (carId: string) => {
    const rootRoute = (carId: string) => pagesRoute.carId(carId)
    const categoryRoute = (category: InteractionCategory) =>
        `${rootRoute(carId)}/${category}`

    return {
        category: categoryRoute,
        new: (category: InteractionCategory) =>
            `${categoryRoute(category)}/new`,
        details: (category: InteractionCategory, id: string) =>
            `${categoryRoute(category)}/${id}`
    }
}
