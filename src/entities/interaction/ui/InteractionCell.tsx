'use client'

import { Badge, Cell } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type CarProps, useIntlCarUnit } from '@/entities/car/@x/interactions'
import { useButtonClick } from '@/shared/hooks'
import { useIntlCurrency, useIntlTimeAgo } from '@/shared/i18n'
import { daysAfterToday } from '@/shared/utils'
import type { InteractionProps } from '../model/Props'
import { actionsRoute } from '../routes'

export function InteractionCell({
    interaction: { id, type, description, amount, date, mileage },
    car
}: InteractionProps & CarProps) {
    const t = useTranslations('CarCategoryName')

    const currency = useIntlCurrency(amount)
    const mileageFormat = useIntlCarUnit(mileage, car.odometerUnits)
    const dateTime = useIntlTimeAgo(date)
    const today = daysAfterToday(date) + 1 === 0

    const props = useButtonClick({
        route: actionsRoute(car.id).details(type, id)
    })

    return (
        <Cell
            after={dateTime}
            subhead={t(type)}
            subtitle={mileageFormat}
            description={description}
            titleBadge={currency && today ? <Badge type={'dot'} /> : undefined}
            multiline={true}
            {...props}
        >
            {currency}
        </Cell>
    )
}
