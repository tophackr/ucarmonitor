'use client'

import { type JSX, type PropsWithChildren, memo } from 'react'
import { useLoadingCars } from '../store/useLoadingCars'
import { CarsInitContext } from './CarsInitContext'

export const CarsInitContextProvider = memo(function CarsInitContextProvider({
    children
}: PropsWithChildren): JSX.Element {
    const { isLoading } = useLoadingCars()

    return (
        <CarsInitContext.Provider value={{ isLoading }}>
            {children}
        </CarsInitContext.Provider>
    )
})
