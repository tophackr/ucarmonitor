import { Badge, Cell } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { useButtonClick } from '@/shared/lib'
import { pagesRoute } from '@/shared/routes'
import type { CarProps } from '../model/Props'
import { CarAvatar } from './CarAvatar'

export const CarCell = memo(function CarCell({ car }: CarProps) {
    const t = useTranslations('Car')

    const props = useButtonClick({ route: pagesRoute.carId(car.id) })

    return (
        <Cell
            after={
                car?.default && <Badge type={'number'}>{t('default')}</Badge>
            }
            before={
                <CarAvatar
                    name={car.brand}
                    size={28}
                />
            }
            subhead={car?.name}
            subtitle={car?.model}
            {...props}
        >
            {car.brand}
        </Cell>
    )
})
