import type { CarReqData } from '@/entities/car'

export type CarDefaultFrom = Pick<CarReqData, 'isDefault'>
export type CarInfoForm = Pick<CarReqData, 'brand' | 'model' | 'name' | 'year'>
export type CarFuelForm = Pick<CarReqData, 'fuelType' | 'fuelCapacity'>
export type CarMileageForm = Pick<
    CarReqData,
    'mileage' | 'odometerUnits' | 'engineHoursEnabled' | 'engineHours'
>
