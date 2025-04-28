'use client'

import { notFound } from 'next/navigation'
import { type JSX, type PropsWithChildren, memo, use, useMemo } from 'react'
import {
    InteractionCategory,
    useFindAllInteractionsQuery
} from '@/entities/interaction/@x/car'
import type { ParamsProps } from '@/shared/lib/dom'
import { useFindOneCarQuery } from '../../api/carApi'
import type { CarIdProps } from '../../model/Props'
import { CarPreviewSkeleton } from '../../ui/CarPreviewSkeleton'
import { CarContext } from './CarContext'

export const CarContextProvider = memo(function CarContextProvider({
    children,
    params
}: PropsWithChildren<ParamsProps<CarIdProps>>): JSX.Element {
    const { carId } = use(params)

    const {
        data: car,
        isLoading: isCarLoading,
        isSuccess: isCarSuccess,
        isError: isCarError,
        error: carError
    } = useFindOneCarQuery({ carId })

    const stableCarId = useMemo(
        () => ({ carId: car?.id ? car.id : '' }),
        [car?.id]
    )

    const {
        data: interactions,
        isFetching: isInteractionsFetching,
        isError: isInteractionError,
        error: interactionError
    } = useFindAllInteractionsQuery(stableCarId!, {
        skip: !car?.id || (!isCarLoading && isCarSuccess && !isCarError)
    })

    if (isCarError) console.error('CarContextProvider.carError', carError)
    if (isInteractionError)
        console.error('CarContextProvider.interactionError', interactionError)

    if (isCarLoading) return <CarPreviewSkeleton />

    if (!car) {
        notFound()
    }

    if (isInteractionsFetching) return <CarPreviewSkeleton />

    const lastMileage = interactions?.find(
        i => i.type === InteractionCategory.mileage
    )

    const mileage =
        lastMileage && lastMileage.mileage ? lastMileage.mileage : car.mileage

    return (
        <CarContext.Provider value={{ car, mileage }}>
            {children}
        </CarContext.Provider>
    )
})
