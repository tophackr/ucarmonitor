'use client'

import { Badge, Cell } from '@telegram-apps/telegram-ui'
import { useFormatter, useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { type CarProps, useIntlCarUnit } from '@/entities/car/@x/interaction'
import { useIntlCurrency, useIntlTimeAgo } from '@/shared/i18n'
import { daysAfterToday } from '@/shared/lib/date'
import { useButtonClick } from '@/shared/lib/dom'
import { InteractionCategory } from '../model/InteractionDto'
import type { InteractionProps } from '../model/Props'
import { actionsRoute } from '../routes/actions'

export const InteractionCell = memo(function InteractionCell({
    interaction: { id, type, description, amount, engineHours, date, mileage },
    car
}: InteractionProps & CarProps): JSX.Element {
    const t = useTranslations('CarCategoryName')

    const currency = useIntlCurrency().format(amount ?? 0)
    const mileageFormat = useIntlCarUnit(mileage ?? 0, car.odometerUnits)
    const dateTime = useIntlTimeAgo(new Date(date))
    const isToday = daysAfterToday(new Date(date)) + 1 === 0

    const isMileageType = type === InteractionCategory.mileage
    const format = useFormatter()

    const props = useButtonClick({
        route: actionsRoute(car.id).details(type, id)
    })

    const title = isMileageType ? mileageFormat : currency

    return (
        <Cell
            after={dateTime}
            subhead={t(type)}
            subtitle={
                isMileageType
                    ? engineHours &&
                      `${format.number(engineHours, { maximumFractionDigits: 2 })} ч`
                    : mileageFormat
            }
            description={description}
            titleBadge={
                Boolean(title) && isToday ? <Badge type={'dot'} /> : undefined
            }
            multiline={true}
            {...props}
        >
            {title}
        </Cell>
    )
})
