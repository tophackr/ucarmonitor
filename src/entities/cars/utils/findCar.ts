import type { ICar } from '../types'

export function findCar(cars: ICar[], carId: string) {
    return cars.find(car => car.id === carId)
}
