'use client'

import { Cell, Progress, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { useCarContext } from '@/entities/car/@x/repair'
import { useIntlUnit } from '@/shared/i18n'
import { cx } from '@/shared/lib/dom'
import type { CommonRepairProps } from '../model/Props'
import type { RepairOption } from '../model/RepairDto'
import { isRepair } from '../model/isRepair'
import { useRepairDate } from './hooks/useRepairDate'
import { useRepairMileage } from './hooks/useRepairMileage'

export const RepairCell = memo(function RepairCell({
    commonRepair
}: CommonRepairProps): JSX.Element | null {
    const t = useTranslations('CarActionForm.repair_work.options')

    const { car } = useCarContext()

    const intlUnitOdometer = useIntlUnit(car.odometerUnits)
    const intlUnitDay = useIntlUnit('day')

    const { mileage: nextMileage, percent: mileagePercent } = useRepairMileage(
        commonRepair?.mileage,
        commonRepair?.interaction?.mileage
    )
    const { days: nextDays, percent: daysPercent } = useRepairDate(
        commonRepair?.days,
        commonRepair?.interaction?.date
    )

    if (!commonRepair.mileage && !commonRepair.days) {
        return null
    }

    return (
        <Section>
            <Cell
                subtitle={
                    <Progress
                        value={Math.max(mileagePercent, daysPercent)}
                        className={cx(
                            commonRepair?.interaction
                                ? 'bg-hint'
                                : 'bg-destructive',
                            'mt-2'
                        )}
                    />
                }
                description={
                    <>
                        {commonRepair.mileage && (
                            <p>
                                Каждые{' '}
                                {intlUnitOdometer.format(commonRepair.mileage)}
                            </p>
                        )}
                        {commonRepair.days && (
                            <p>Раз в {intlUnitDay.format(commonRepair.days)}</p>
                        )}
                    </>
                }
                after={
                    commonRepair?.interaction && (
                        <span className={'w-24 text-end'}>
                            {nextMileage && <p>{nextMileage}</p>}
                            {nextDays && <p>{nextDays}</p>}
                        </span>
                    )
                }
                multiline
            >
                {isRepair(commonRepair.option)
                    ? t(commonRepair.option as RepairOption)
                    : commonRepair.option}
            </Cell>
        </Section>
    )
})
