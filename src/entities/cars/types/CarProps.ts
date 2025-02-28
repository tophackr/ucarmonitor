import type { ICar } from './Car'
import type { CarActionCategory } from './CarActionCategory'

export interface CarProps {
    car: ICar
}

export interface CarIdProps {
    carId: string
}

export interface CarCategoryProps {
    category: CarActionCategory
}
