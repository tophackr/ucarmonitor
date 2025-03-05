'use client'

import { List } from '@telegram-apps/telegram-ui'
import { type CarProps, useCars } from '@/entities/car'
import { DefaultSection } from './DefaultSection'
import { DeleteCarButton } from './DeleteCarButton'
import { FuelSection } from './FuelSection'
import { InfoFormProvider } from './InfoFormProvider'
import { InfoSection } from './InfoSection'
import { MileageSection } from './MileageSection'
import { SaveCarButton } from './SaveCarButton'

export function Form({ car }: Partial<CarProps>) {
    const { cars } = useCars()

    const showDefaultButton = (cars.length > 0 && !car) || cars.length > 1

    return (
        <List>
            <InfoFormProvider car={car}>
                {showDefaultButton && <DefaultSection />}

                <div className={'grid md:grid-cols-2 gap-x-4'}>
                    <InfoSection />
                    <FuelSection />
                    <MileageSection />
                </div>

                <SaveCarButton />
            </InfoFormProvider>

            {car && <DeleteCarButton carId={car.id} />}
        </List>
    )
}
