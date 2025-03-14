'use client'

import { Cell, List, Progress, Section } from '@telegram-apps/telegram-ui'
import { useFormatter, useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useCarContext } from '@/entities/car'
import { type IRepair, useSortedInteractions } from '@/entities/interaction'
import { getIntlUnit, useMessagesKeys } from '@/shared/i18n'
import { getPercent } from '@/shared/lib/number'

export function StatsParts(): JSX.Element {
    const t = useTranslations('CarActionForm')
    const format = useFormatter()

    const { car, mileage } = useCarContext()

    const sortedInteractions = useSortedInteractions({ carId: car.id })

    const repairOptionsKeys = useMessagesKeys(
        'CarActionForm',
        'repair_work',
        'options'
    )

    const num = 20000

    return (
        <List>
            {repairOptionsKeys.map((key, index) => {
                const inter = sortedInteractions.find(i =>
                    (i as IRepair).repairList?.includes(key)
                )
                const nextReplacement =
                    inter?.mileage && inter.mileage + num - mileage
                const nextReplacementOrZero = nextReplacement ?? 0
                const nextReplacementFixed =
                    nextReplacementOrZero > num ? num : nextReplacementOrZero

                const nextReplacementMileage = getIntlUnit(
                    format,
                    nextReplacementFixed,
                    car.odometerUnits
                )

                return (
                    <Section key={index}>
                        <Cell
                            subtitle={
                                <Progress
                                    value={getPercent(
                                        nextReplacementFixed,
                                        num
                                    )}
                                    className={'bg-hint mt-2'}
                                />
                            }
                            description={`Каждые ${num} км`}
                            multiline
                            after={
                                <span className={'text-end w-24'}>
                                    {nextReplacementMileage}
                                </span>
                            }
                        >
                            {t(`repair_work.options.${key}`)}
                        </Cell>
                    </Section>
                )
            })}
        </List>
    )
}
