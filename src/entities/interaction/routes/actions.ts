import { pagesRoute } from '@/shared/routes'
import type { InteractionCategory } from '../model'

export const actionsRoute = (carId: string) => {
    const rootRoute = (carId: string) => pagesRoute.carId(carId)
    const categoryRoute = (category: InteractionCategory) =>
        `${rootRoute(carId)}/${category}`

    return {
        category: categoryRoute,
        new: (category: InteractionCategory) =>
            `${categoryRoute(category)}/new`,
        details: (category: InteractionCategory, id: string) =>
            `${categoryRoute(category)}/${id}`,
        edit: (category: InteractionCategory, id: string) =>
            `${categoryRoute(category)}/${id}/edit`
    }
}
