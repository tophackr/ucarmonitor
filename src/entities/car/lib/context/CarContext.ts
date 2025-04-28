import { createContext } from 'react'
import { FuelType, OdometerUnits } from '../../model/CarDto'
import type { CarMileageProps, CarProps } from '../../model/Props'

export const CarContext = createContext<CarProps & CarMileageProps>({
    car: {
        id: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isDefault: false,
        brand: '',
        model: null,
        name: null,
        year: null,
        fuelType: FuelType.gasoline,
        fuelCapacity: null,
        mileage: 0,
        odometerUnits: OdometerUnits.kilometer,
        engineHoursEnabled: false,
        engineHours: null,
        userId: ''
    },
    mileage: 0
})
