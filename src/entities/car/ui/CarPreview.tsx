import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, type PropsWithChildren, memo } from 'react'
import { ListSection } from '@/shared/ui'
import type { CarMileageProps, CarProps } from '../model/Props'
import { CarAvatar } from './CarAvatar'
import { useIntlCarUnit } from './hooks/useIntlCarUnit'

export const CarPreview = memo(function CarPreview({
    car: { odometerUnits, brand, model },
    children,
    mileage
}: PropsWithChildren<CarProps & CarMileageProps>): JSX.Element {
    const t = useTranslations('Car')
    const intlMileage = useIntlCarUnit(mileage, odometerUnits)

    return (
        <ListSection>
            <Placeholder
                header={`${brand} ${model ? model : ''}`}
                description={`${t('mileage')}: ${intlMileage}`}
            >
                {children}

                <CarAvatar
                    name={brand}
                    size={96}
                />
            </Placeholder>
        </ListSection>
    )
})
