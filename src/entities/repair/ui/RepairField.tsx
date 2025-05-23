'use client'

import { Cell, Input, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import type { RepairProps, RepairsProps } from '../model/Props'
import type { RepairOption } from '../model/RepairDto'
import { isRepair } from '../model/isRepair'

export const RepairField = memo(function RepairField({
    repair: { option }
}: RepairProps): JSX.Element {
    const t = useTranslations('Repair')

    const {
        register,
        formState: { errors },
        control
    } = useFormContext<RepairsProps>()
    const { fields } = useFieldArray({
        control,
        name: 'repairs'
    })

    const fieldIndex = fields.findIndex(f => f.option === option)

    return (
        <Section
            header={
                isRepair(option)
                    ? t(`options.${option as RepairOption}`)
                    : option
            }
        >
            <Input
                type={'number'}
                status={errors.repairs?.[fieldIndex]?.mileage && 'error'}
                placeholder={t('mileage')}
                {...register(`repairs.${fieldIndex}.mileage`, {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.interval_min') }
                })}
            />
            <Input
                type={'number'}
                status={errors.repairs?.[fieldIndex]?.days && 'error'}
                placeholder={t('days')}
                {...register(`repairs.${fieldIndex}.days`, {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.interval_min') }
                })}
            />
            <Cell
                after={
                    <Controller
                        control={control}
                        name={`repairs.${fieldIndex}.isVisible`}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Switch
                                onBlur={onBlur}
                                onChange={() => onChange(!value)}
                                checked={value}
                            />
                        )}
                    />
                }
            >
                {t('visible')}
            </Cell>
        </Section>
    )
})
