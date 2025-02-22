import { List, Placeholder, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { PropsWithChildren } from 'react'
import type { CarProps } from '../types/CarProps'
import { CarAvatar } from './CarAvatar'

export function CarPreview({ car, children }: PropsWithChildren<CarProps>) {
    const t = useTranslations('Car')

    return (
        <List>
            <Section>
                <Placeholder
                    header={`${car.brand} ${car.model}`}
                    description={`${t('mileage')}: ${car.mileage} ${t(`odometerUnits.${car.odometerUnits}`)}`}
                >
                    {children}

                    <CarAvatar
                        name={car.brand}
                        size={96}
                    />
                </Placeholder>
            </Section>
        </List>
    )
}
