import { CarCategory } from '@/features/CarActionButtons'

export function generateStaticParams() {
    return Object.values(CarCategory).map(category => [
        { slug: [category] },
        { slug: [category, 'new'] }
    ])
}
