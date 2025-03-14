import { StatsCategory, type StatsCategoryProps } from '@/entities/stat'

type StaticParams = StatsCategoryProps[]

export function generateStaticParams(): StaticParams {
    return Object.values(StatsCategory).map(category => ({ category }))
}
