import { pagesRoute } from '@/shared/routes'
import { CarCategory } from '../types/CarCategories'

export const actionsRoute = (carId: string) => {
    const rootRoute = (carId: string) => pagesRoute.carId(carId)
    const categoryRoute = (category: CarCategory) =>
        `${rootRoute(carId)}/${category}`

    return {
        category: categoryRoute,
        new: (category: CarCategory) => `${categoryRoute(category)}/new`,
        details: (category: CarCategory, id: string) =>
            `${categoryRoute(category)}/${id}`
    }
}
