'use client'

import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
    CarFuel,
    CarOdometerUnits,
    type CarProps,
    type ICar
} from '@/entities/car'

type InitCar = Partial<Omit<ICar, 'id'>>

export const initialCar: InitCar = {
    mileage: 0,
    fuel: CarFuel.Gasoline,
    odometerUnits: CarOdometerUnits.kilometers,
    engineHoursEnabled: false
}

export function InfoFormProvider({
    car,
    children
}: PropsWithChildren<Partial<CarProps>>) {
    const methods = useForm<ICar>({
        defaultValues: { ...initialCar, ...car }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
}
