'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, useMemo } from 'react'
import {
    type PartInteractionData,
    useInteractionContext
} from '@/entities/interaction'
import { PartOption, useFindAllPartsQuery } from '@/entities/part'

export function PartsSection(): JSX.Element | undefined {
    const t = useTranslations('CarActionForm')

    const { interaction } = useInteractionContext()
    const {
        data: { ids }
    } = interaction as unknown as PartInteractionData

    const { data, isLoading, isError, error } = useFindAllPartsQuery({
        carId: interaction.carId
    })

    if (isError) console.error('widgets.PartsSection', error)

    const partOptions = useMemo(() => Object.values(PartOption), [])
    const partsListFiltered = useMemo(
        () => data?.filter(({ id }) => ids.includes(id)),
        [data, ids]
    )

    // todo: loading parts
    if (isLoading) return <>Loading parts...</>

    return partsListFiltered?.length ? (
        <Section header={t('parts_work.title')}>
            {partsListFiltered?.map(({ id, option }) => (
                <Cell key={id}>
                    {partOptions.includes(option as PartOption)
                        ? t(`parts_work.options.${option as PartOption}`)
                        : option}
                </Cell>
            ))}
        </Section>
    ) : undefined
}
