'use client'

import { List } from '@telegram-apps/telegram-ui'
import { FormProvider, useForm } from 'react-hook-form'
import type { CarProps, ICar } from '@/entities/cars'
import { initialCar } from '../constants/defaults'
import { DeleteButton } from './DeleteButton'
import { FormMainButton } from './FormMainButton'
import { FuelSection } from './FuelSection'
import { InfoSection } from './InfoSection'
import { MileageSection } from './MileageSection'

export function Form({ car }: Partial<CarProps>) {
    const methods = useForm<ICar>({
        defaultValues: { ...initialCar, ...car }
    })
    const { handleSubmit } = methods

    return (
        <List>
            <FormProvider {...methods}>
                <InfoSection />
                <FuelSection />
                <MileageSection />

                <FormMainButton handleSubmit={handleSubmit} />
            </FormProvider>

            {car && <DeleteButton carId={car.id} />}
        </List>
    )
}
