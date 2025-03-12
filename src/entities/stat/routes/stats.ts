import { pagesRoute } from '@/shared/routes'
import type { StatsCategory } from '../model/StatsCategory'

class Stats {
    private root = (carId: string) => `${pagesRoute.carId(carId)}/stats`

    build = (carId: string, category: StatsCategory) =>
        `${this.root(carId)}/${category}`
}

export const statsRoute = new Stats()
