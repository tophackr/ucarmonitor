'use client'

import { Badge, Cell } from '@telegram-apps/telegram-ui'
import { useLocale, useTranslations } from 'next-intl'
import { type CarProps, useIntlUnit } from '@/entities/cars/@x/interactions'
import { useButtonClick, useIntlCurrency } from '@/shared/hooks'
import { toIntlTimeAgo } from '@/shared/utils'
import { actionsRoute } from '../routes'
import type { InteractionProps } from '../types'
import { isToday } from '../utils/isToday'

export function InteractionCell({
    interaction: { id, type, description, amount, date, mileage },
    car
}: InteractionProps & CarProps) {
    const t = useTranslations('CarCategoryName')
    const locale = useLocale()

    const currency = useIntlCurrency(locale, amount)
    const mileageFormat = useIntlUnit(locale, car.odometerUnits, mileage)
    const dateTime = toIntlTimeAgo(locale, date)
    const today = isToday(date)

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
