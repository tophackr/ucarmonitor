import { StatsCategory } from '@/entities/stat'

export function generateStaticParams() {
    return Object.values(StatsCategory).map(category => ({ category }))
}
