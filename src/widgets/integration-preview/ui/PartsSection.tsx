'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useMessages, useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { type IParts, useInteractionContext } from '@/entities/interaction'
import type { Translation } from '@/shared/i18n'
import type { PartsOptions } from '../model/TranslationOptions'

export function PartsSection() {
    const t = useTranslations('CarActionForm')

    const { interaction } = useInteractionContext()
    const { partsList } = interaction as IParts

    const messages = useMessages() as unknown as Translation
    const partsOptionsKeys = Object.keys(
        messages.CarActionForm.parts_work.options
    ) as unknown as PartsOptions[]

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
