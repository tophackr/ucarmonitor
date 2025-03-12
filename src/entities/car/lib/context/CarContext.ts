import { createContext } from 'react'
import { CarFuel, CarOdometerUnits } from '../../model/Car'
import type { CarProps } from '../../model/Props'

export const CarContext = createContext<CarProps>({
    car: {
        id: '',
        brand: '',
        fuel: CarFuel.Gasoline,
        mileage: 0,
        odometerUnits: CarOdometerUnits.kilometer,
        engineHoursEnabled: false
    }
})
