'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, useMemo } from 'react'
import { type IParts, useInteractionContext } from '@/entities/interaction'
import { useMessagesKeys } from '@/shared/i18n'

export function PartsSection(): JSX.Element {
    const t = useTranslations('CarActionForm')

    const { interaction } = useInteractionContext()
    const { partsList } = interaction as IParts

    const partsOptionsKeys = useMessagesKeys(
        'CarActionForm',
        'parts_work',
        'options'
    )

    const partsListFiltered = useMemo(
        () => partsOptionsKeys.filter(i => partsList?.includes(i)),
        [partsList, partsOptionsKeys]
    )

    return (
        <Section header={t('parts_work.title')}>
            {partsListFiltered.map(i => (
                <Cell key={i}>{t(`parts_work.options.${i}`)}</Cell>
            ))}
        </Section>
    )
}
