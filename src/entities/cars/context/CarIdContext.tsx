'use client'

import { type PropsWithChildren, createContext, use } from 'react'
import type { ParamsProps } from '@/shared/types'
import type { CarIdProps } from '../types/CarProps'

export const CarIdContext = createContext<CarIdProps>({ carId: '' })

export function CarIdContextProvider({
    children,
    params
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    const { carId } = use(params)

    return (
        <CarIdContext.Provider value={{ carId }}>
            {children}
        </CarIdContext.Provider>
    )
}
