import { createContext } from 'react'
import { CarFuel, CarOdometerUnits } from '../../model/Car'
import type { CarMileageProps, CarProps } from '../../model/Props'

export const CarContext = createContext<CarProps & CarMileageProps>({
    car: {
        id: '',
        brand: '',
        fuel: CarFuel.Gasoline,
        mileage: 0,
        odometerUnits: CarOdometerUnits.kilometer,
        engineHoursEnabled: false
    },
    mileage: 0
})
