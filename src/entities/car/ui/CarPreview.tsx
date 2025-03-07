import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type PropsWithChildren, memo } from 'react'
import { ListSection } from '@/shared/ui'
import { useIntlCarUnit } from '../hooks/useIntlCarUnit'
import type { CarProps } from '../model/Props'
import { CarAvatar } from './CarAvatar'

export const CarPreview = memo(function CarPreview({
    car,
    children
}: PropsWithChildren<CarProps>) {
    const t = useTranslations('Car')
    const mileage = useIntlCarUnit(car.mileage, car.odometerUnits)

    return (
        <ListSection>
            <Placeholder
                header={`${car.brand} ${car.model ? car.model : ''}`}
                description={`${t('mileage')}: ${mileage}`}
            >
                {children}

                <CarAvatar
                    name={car.brand}
                    size={96}
                />
            </Placeholder>
        </ListSection>
    )
})
