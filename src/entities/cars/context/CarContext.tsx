'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, createContext, use } from 'react'
import type { ParamsProps } from '@/shared/types'
import { useFindCar } from '../hooks'
import { CarFuel, CarOdometerUnits } from '../types'
import type { CarIdProps, CarProps } from '../types/CarProps'

export const CarContext = createContext<CarProps>({
    car: {
        id: '',
        brand: '',
        fuel: CarFuel.Gasoline,
        mileage: 0,
        odometerUnits: CarOdometerUnits.kilometers,
        engineHoursEnabled: false
    }
})

export function CarContextProvider({
    children,
    params
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    const { carId } = use(params)

    const car = useFindCar(carId)

    if (!car) {
        notFound()
    }

    return <CarContext.Provider value={{ car }}>{children}</CarContext.Provider>
}
