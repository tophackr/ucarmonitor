'use client'

import { List } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import {
    type CarMileageProps,
    type CarProps,
    useFindAllCarsQuery
} from '@/entities/car'
import { DefaultSection } from './DefaultSection'
import { DeleteCarButton } from './DeleteCarButton'
import { FuelSection } from './FuelSection'
import { InfoFormProvider } from './InfoFormProvider'
import { InfoSection } from './InfoSection'
import { MileageSection } from './MileageSection'
import { SaveCarButton } from './SaveCarButton'

export const Form = memo(function Form({
    car,
    mileage
}: Partial<CarProps & CarMileageProps>): JSX.Element {
    const { data: cars, isError, error } = useFindAllCarsQuery()

    if (isError) console.error('InfoForm', error)

    const showDefaultButton =
        cars && ((cars.length > 0 && !car) || cars.length > 1)

    return (
        <List>
            <InfoFormProvider
                car={car}
                mileage={mileage}
            >
                {showDefaultButton && <DefaultSection />}

                <div className={'grid gap-x-4 md:grid-cols-2'}>
                    <InfoSection />
                    <FuelSection />
                    <MileageSection />
                </div>

                <SaveCarButton />
            </InfoFormProvider>

            {car && <DeleteCarButton carId={car.id} />}
        </List>
    )
})
