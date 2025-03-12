'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, memo, use } from 'react'
import type { ParamsProps } from '@/shared/lib/dom'
import type { CarIdProps } from '../../model/Props'
import { CarContext } from './CarContext'
import { useFindCar } from './hooks/useFindCar'

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
