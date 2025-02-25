import type { ICar } from '@/entities/cars'

export type CarInfoForm = Pick<ICar, 'brand' | 'model' | 'name' | 'year'>
export type CarFuelForm = Pick<ICar, 'fuel' | 'fuelCapacity'>
export type CarMileageForm = Pick<
    ICar,
    'mileage' | 'odometerUnits' | 'engineHoursEnabled' | 'engineHours'
>
