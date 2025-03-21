'use client'

import { type JSX, type PropsWithChildren, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useCarContext } from '@/entities/car'
import {
    type CategoryProps,
    FuelGrade,
    type IInteraction,
    InteractionCategory,
    type InteractionProps,
    TiresFormType
} from '@/entities/interaction'

export const ActionFormProvider = memo(function ActionFormProvider({
    children,
    category,
    interaction
}: PropsWithChildren<CategoryProps & Partial<InteractionProps>>): JSX.Element {
    const { mileage } = useCarContext()

    const values: Omit<IInteraction, 'id' | 'carId'> = {
        type: category,
        date: new Date(),
        mileage: mileage
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
        defaultValues: { ...values, ...interaction }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
})
