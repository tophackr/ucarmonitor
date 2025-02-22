import { notFound } from 'next/navigation'
import { type CarIdProps, type CarSlugProps, carsMock } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export async function CarSlugPage({
    params
}: ParamsProps<CarIdProps & CarSlugProps>) {
    const { carId, slug } = await params

    // TODO: replace mock
    const car = carsMock.find(car => car.id === carId)

    if (!car) {
        notFound()
    }

    const [category, action] = slug

    if (!action) {
        return (
            <h1>
                Категория: {category} для автомобиля {carId}
            </h1>
        )
    }

    if (action === 'new') {
        return (
            <h1>
                Создание нового {category} для автомобиля {carId}
            </h1>
        )
    }

    return (
        <h1>
            Просмотр {category}, ID: {action} для автомобиля {carId}
        </h1>
    )
}
