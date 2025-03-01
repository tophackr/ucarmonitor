'use client'

import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
    CarActionCategory,
    type CarCategoryProps,
    useCarContext
} from '@/entities/cars'
import type { CategoryForm } from '../types/CategoryForm'
import type { BaseForm } from './base/types/BaseForm'
import { FuelGrade } from './fuel/types/FuelGrade'
import { TiresFormType } from './tires/types/TiresForm'

export function ActionFormProvider({
    children,
    category
}: PropsWithChildren<CarCategoryProps>) {
    const { car } = useCarContext()

    const values: BaseForm & CategoryForm = {
        date: new Date(),
        mileage: car.mileage
    }

    if (category === CarActionCategory.fuel) {
        Object.assign(values, {
            fuelGrade: FuelGrade.AI92,
            beforeRefueling: 0,
            afterRefueling: 0
        })
    } else if (category === CarActionCategory.purchaseTires) {
        Object.assign(values, {
            type: TiresFormType.tires,
            tiresType: 0,
            wheelsType: 0,
            width: 0,
            height: 0,
            diameter: 0
        })
    }

    const methods = useForm<BaseForm & CategoryForm>({
        defaultValues: values
    })

    return <FormProvider {...methods}>{children}</FormProvider>
}
