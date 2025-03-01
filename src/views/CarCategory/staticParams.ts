import { CarActionCategory } from '@/entities/cars'

export function generateStaticParams() {
    return Object.values(CarActionCategory).map(category => ({ category }))
}
