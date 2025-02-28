import { CarActionCategory } from '@/entities/cars'
import { pagesRoute } from '@/shared/routes'

export const actionsRoute = (carId: string) => {
    const rootRoute = (carId: string) => pagesRoute.carId(carId)
    const categoryRoute = (category: CarActionCategory) =>
        `${rootRoute(carId)}/${category}`

    return {
        category: categoryRoute,
        new: (category: CarActionCategory) => `${categoryRoute(category)}/new`,
        details: (category: CarActionCategory, id: string) =>
            `${categoryRoute(category)}/${id}`
    }
}
