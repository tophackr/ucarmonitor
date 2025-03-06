'use client'

import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useCarContext } from '@/entities/car'
import {
    type CategoryProps,
    FuelGrade,
    type IInteraction,
    InteractionCategory,
    TiresFormType
} from '@/entities/interaction'

export function ActionFormProvider({
    children,
    category
}: PropsWithChildren<CategoryProps>) {
    const { car } = useCarContext()

    const values: Omit<IInteraction, 'id' | 'carId'> = {
        type: category,
        date: new Date(),
        mileage: car.mileage
    }

    if (category === InteractionCategory.fuel) {
        Object.assign(values, {
            fuelGrade: FuelGrade.AI92,
            beforeRefueling: 0,
            afterRefueling: 0
        })
    } else if (category === InteractionCategory.purchaseTires) {
        Object.assign(values, {
            formType: TiresFormType.tires,
            tiresType: 0,
            wheelsType: 0,
            width: 0,
            height: 0,
            diameter: 0
        })
    }

    const methods = useForm<IInteraction>({
        defaultValues: values
    })

    return <FormProvider {...methods}>{children}</FormProvider>
}
