'use client'

import { Cell, Multiselectable, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCarContext } from '@/entities/car'
import type { PartInteractionData } from '@/entities/interaction'
import { PartOption, useFindAllPartsQuery } from '@/entities/part'

export function PartsSection(): JSX.Element {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<PartInteractionData>()

    const { car } = useCarContext()
    const { data, isLoading, isError, error } = useFindAllPartsQuery({
        carId: car.id
    })

    if (isError) console.error('PartsSection', error)

    const partOptions = useMemo(() => Object.values(PartOption), [])

    // todo: loading parts
    if (isLoading) return <>Loading parts...</>

    return (
        <Section header={t('parts_work.title')}>
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
                    {partOptions.includes(option as PartOption)
                        ? t(`parts_work.options.${option as PartOption}`)
                        : option}
                </Cell>
            ))}
        </Section>
    )
}
