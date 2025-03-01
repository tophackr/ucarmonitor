'use client'

import { List } from '@telegram-apps/telegram-ui'
import { FormProvider, useForm } from 'react-hook-form'
import { type CarProps, type ICar, useCars } from '@/entities/cars'
import { initialCar } from '../constants/defaults'
import { DefaultSection } from './DefaultSection'
import { DeleteButton } from './DeleteButton'
import { FuelSection } from './FuelSection'
import { InfoSection } from './InfoSection'
import { MileageSection } from './MileageSection'
import { SaveButton } from './SaveButton'

export function Form({ car }: Partial<CarProps>) {
    const { cars } = useCars()

    const methods = useForm<ICar>({
        defaultValues: { ...initialCar, ...car }
    })

    const showDefaultButton = (cars.length > 0 && !car) || cars.length > 1

    return (
        <List>
            <FormProvider {...methods}>
                {showDefaultButton && <DefaultSection />}

                <div className={'grid md:grid-cols-2 gap-x-4'}>
                    <InfoSection />
                    <FuelSection />
                    <MileageSection />
                </div>

                <SaveButton />
            </FormProvider>

            {car && <DeleteButton carId={car.id} />}
        </List>
    )
}
