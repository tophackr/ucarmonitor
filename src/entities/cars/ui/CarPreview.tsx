import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { PropsWithChildren } from 'react'
import { ListSection } from '@/shared/ui'
import type { CarProps } from '../types/CarProps'
import { CarAvatar } from './CarAvatar'

export function CarPreview({ car, children }: PropsWithChildren<CarProps>) {
    const t = useTranslations('Car')

    return (
        <ListSection>
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
        </ListSection>
    )
}
