'use client'

import { type JSX, type PropsWithChildren, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
    type CarMileageProps,
    type CarProps,
    type CarReqData,
    FuelType,
    OdometerUnits
} from '@/entities/car'

const initialCar: Partial<CarReqData> = {
    fuelType: FuelType.gasoline,
    odometerUnits: OdometerUnits.kilometer,
    engineHoursEnabled: false,
    engineHours: null
}

export const InfoFormProvider = memo(function InfoFormProvider({
    car,
    mileage,
    children
}: PropsWithChildren<Partial<CarProps & CarMileageProps>>): JSX.Element {
    const methods = useForm<CarReqData>({
        defaultValues: { ...initialCar, ...car, mileage: mileage ?? 0 }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
})
