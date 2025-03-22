'use client'

import { Cell, Progress, Section } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { useFormatter, useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { useCarContext } from '@/entities/car/@x/repair'
import type {
    IRepairInteraction,
    InteractionsProps
} from '@/entities/interaction/@x/repair'
import { getIntlUnit } from '@/shared/i18n'
import type { RepairProps } from '../model/Props'
import { useRepairDate } from './hooks/useRepairDate'
import { useRepairMileage } from './hooks/useRepairMileage'

export const RepairCell = memo(function RepairCell({
    repair,
    interactions
}: RepairProps & InteractionsProps): JSX.Element | null {
    const t = useTranslations('CarActionForm.repair_work.options')
    const formatter = useFormatter()

    const { car } = useCarContext()

    const inter = interactions.find(i =>
        (i as IRepairInteraction).repairList?.includes(repair.option)
    )

    const { mileage: nextMileage, percent: mileagePercent } = useRepairMileage(
        repair.mileage,
        inter?.mileage
    )
    const { days: nextDays, percent: daysPercent } = useRepairDate(
        repair.days,
        inter?.date
    )

    if (!repair.mileage && !repair.days) {
        return null
    }

    return (
        <Section>
            <Cell
                subtitle={
                    <Progress
                        value={Math.max(mileagePercent, daysPercent)}
                        className={clsx(
                            inter ? 'bg-hint' : 'bg-destructive',
                            'mt-2'
                        )}
                    />
                }
                description={
                    <>
                        {repair.mileage && (
                            <p>
                                Каждые{' '}
                                {getIntlUnit(
                                    formatter,
                                    repair.mileage,
                                    car.odometerUnits
                                )}
                            </p>
                        )}
                        {repair.days && (
                            <p>
                                Раз в{' '}
                                {getIntlUnit(formatter, repair.days, 'day')}
                            </p>
                        )}
                    </>
                }
                after={
                    <span className={'text-end w-24'}>
                        {inter && (
                            <>
                                {nextMileage && <p>{nextMileage}</p>}
                                {nextDays && <p>{nextDays}</p>}
                            </>
                        )}
                    </span>
                }
                multiline
            >
                {t(repair.option)}
            </Cell>
        </Section>
    )
})
