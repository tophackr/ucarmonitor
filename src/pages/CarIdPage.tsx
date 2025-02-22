import { type CarIdProps, carsMock } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'
import { CarWidget } from '@/widgets/car'
import { notFound } from 'next/navigation'

export async function CarIdPage({ params }: ParamsProps<CarIdProps>) {
    const { carId } = await params

    // TODO: replace mock
    const car = carsMock.find(car => car.id === carId)

    if (!car) {
        notFound()
    }

    return <CarWidget car={car} />
}
