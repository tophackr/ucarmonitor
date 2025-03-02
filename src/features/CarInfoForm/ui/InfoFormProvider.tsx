'use client'

import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { CarProps, ICar } from '@/entities/cars'
import { initialCar } from '../constants/defaults'

export function InfoFormProvider({
    car,
    children
}: PropsWithChildren<Partial<CarProps>>) {
    const methods = useForm<ICar>({
        defaultValues: { ...initialCar, ...car }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
}
