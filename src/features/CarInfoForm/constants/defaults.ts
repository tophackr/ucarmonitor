import { CarFuel, CarOdometerUnits, type ICar } from '@/entities/cars'

type InitCar = Partial<Omit<ICar, 'id'>>

export const initialCar: InitCar = {
    mileage: 0,
    fuel: CarFuel.Gasoline,
    odometerUnits: CarOdometerUnits.kilometers,
    engineHoursEnabled: false
}
