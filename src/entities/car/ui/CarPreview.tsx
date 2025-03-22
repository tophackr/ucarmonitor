import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import type { CarMileageProps, CarProps } from '../model/Props'
import { CarAvatar } from './CarAvatar'
import { useIntlCarUnit } from './hooks/useIntlCarUnit'

export const CarPreview = memo(function CarPreview({
    car: { odometerUnits, brand, model },
    mileage
}: CarProps & CarMileageProps): JSX.Element {
    const t = useTranslations('Car')
    const intlMileage = useIntlCarUnit(mileage, odometerUnits)

    return (
        <Placeholder
            header={`${brand} ${model ? model : ''}`}
            description={`${t('mileage')}: ${intlMileage}`}
        >
            <CarAvatar
                name={brand}
                size={96}
            />
        </Placeholder>
    )
})
