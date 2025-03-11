'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, createContext, memo, use } from 'react'
import type { ParamsProps } from '@/shared/lib/dom'
import { CarFuel, CarOdometerUnits } from '../../model/Car'
import type { CarIdProps, CarProps } from '../../model/Props'
import { useFindCar } from './useFindCar'

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

export const CarContextProvider = memo(function CarContextProvider({
    children,
    params
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    const { carId } = use(params)

    const car = useFindCar(carId)

    if (!car) {
        notFound()
    }

    return <CarContext.Provider value={{ car }}>{children}</CarContext.Provider>
})
