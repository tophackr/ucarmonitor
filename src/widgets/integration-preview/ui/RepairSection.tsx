'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, useMemo } from 'react'
import {
    type RepairInteractionData,
    useInteractionContext
} from '@/entities/interaction'
import {
    RepairOption,
    isRepair,
    useFindAllRepairsQuery
} from '@/entities/repair'

export function RepairSection(): JSX.Element | undefined {
    const t = useTranslations('CarActionForm')

    const { interaction } = useInteractionContext()
    const {
        data: { ids }
    } = interaction as unknown as RepairInteractionData

    const { data, isLoading, isError, error } = useFindAllRepairsQuery({
        carId: interaction.carId
    })

    if (isError) console.error('widget.RepairSection', error)

    const repairListFiltered = useMemo(
        () => data?.filter(({ id }) => ids.includes(id)),
        [data, ids]
    )

    // todo: loading repairs
    if (isLoading) return <>Loading repairs...</>

    return repairListFiltered?.length ? (
        <Section header={t('repair_work.title')}>
            {repairListFiltered?.map(({ id, option }) => (
                <Cell key={id}>
                    {isRepair(option)
                        ? t(`repair_work.options.${option as RepairOption}`)
                        : option}
                </Cell>
            ))}
        </Section>
    ) : undefined
}
