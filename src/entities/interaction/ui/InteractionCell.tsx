'use client'

import { Badge, Cell } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { CarOdometerUnits, type CarProps } from '@/entities/car/@x/interactions'
import { useButtonClick } from '@/shared/hooks'
import { useIntlCurrency, useIntlTimeAgo, useIntlUnit } from '@/shared/i18n'
import { daysAfterToday } from '@/shared/utils'
import type { InteractionProps } from '../model'
import { actionsRoute } from '../routes'

export function InteractionCell({
    interaction: { id, type, description, amount, date, mileage },
    car
}: InteractionProps & CarProps) {
    const t = useTranslations('CarCategoryName')

    const currency = useIntlCurrency(amount)
    const mileageFormat = useIntlUnit(
        car.odometerUnits === CarOdometerUnits.kilometers
            ? 'kilometer'
            : 'mile',
        mileage
    )
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
