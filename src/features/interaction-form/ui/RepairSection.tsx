'use client'

import { Cell, Multiselectable, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCarContext } from '@/entities/car'
import type { RepairInteractionData } from '@/entities/interaction'
import {
    RepairOption,
    isRepair,
    useFindAllRepairsQuery
} from '@/entities/repair'

export function RepairSection(): JSX.Element {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<RepairInteractionData>()

    const { car } = useCarContext()
    const { data, isLoading, isError, error } = useFindAllRepairsQuery({
        carId: car.id
    })

    if (isError) console.error('RepairSection', error)

    // todo: loading repairs
    if (isLoading) return <>Loading repairs...</>

    return (
        <Section header={t('repair_work.title')}>
            {data?.map(({ id, option }) => (
                <Cell
                    key={id}
                    Component={'label'}
                    before={
                        <Multiselectable
                            value={id}
                            {...register('data.ids', {
                                required: t('errors.repair_work_required')
                            })}
                        />
                    }
                >
                    {isRepair(option)
                        ? t(`repair_work.options.${option as RepairOption}`)
                        : option}
                </Cell>
            ))}
        </Section>
    )
}
