'use client'

import { type PropsWithChildren, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
    CarFuel,
    type CarMileageProps,
    CarOdometerUnits,
    type CarProps,
    type ICar
} from '@/entities/car'

type InitCar = Partial<Omit<ICar, 'id'>>

export const initialCar: InitCar = {
    mileage: 0,
    fuel: CarFuel.Gasoline,
    odometerUnits: CarOdometerUnits.kilometer,
    engineHoursEnabled: false
}

export const InfoFormProvider = memo(function InfoFormProvider({
    car,
    mileage,
    children
}: PropsWithChildren<Partial<CarProps & CarMileageProps>>) {
    const methods = useForm<ICar>({
        defaultValues: { ...initialCar, ...car, mileage }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
})
