'use client'

import { type JSX, type PropsWithChildren, memo, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useCarContext } from '@/entities/car'
import {
    type CategoryProps,
    FuelGrade,
    InteractionCategory,
    type InteractionProps,
    type InteractionReqData,
    WheelType
} from '@/entities/interaction'

export const InteractionFormProvider = memo(function ActionFormProvider({
    children,
    category,
    interaction
}: PropsWithChildren<CategoryProps & Partial<InteractionProps>>): JSX.Element {
    const { mileage } = useCarContext()

    const values: Omit<InteractionReqData, 'date' | 'description'> = {
        type: category,
        mileage: mileage,
        amount: null,
        engineHours: null
    }

    if (category === InteractionCategory.fuel) {
        Object.assign(values, {
            data: {
                fuelGrade: FuelGrade.ai92,
                capacityFull: null
            }
        })
    } else if (category === InteractionCategory.purchase_wheels) {
        Object.assign(values, {
            data: {
                wheelType: WheelType.tire
                /* tireType: 0,
                rimType: 0,
                width: 0,
                height: 0,
                diameter: 0 */
            }
        })
    }

    const formatDate = useCallback(
        (date: Date) => date.toISOString().split('T')[0],
        []
    )

    const methods = useForm<InteractionReqData>({
        defaultValues: {
            ...values,
            ...interaction,
            date: interaction?.date
                ? formatDate(new Date(interaction.date))
                : formatDate(new Date())
        }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
})
