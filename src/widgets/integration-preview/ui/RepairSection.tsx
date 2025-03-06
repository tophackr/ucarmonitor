'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useMessages, useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { type IRepair, useInteractionContext } from '@/entities/interaction'
import type { Translation } from '@/shared/i18n'
import type { RepairOptions } from '../model/TranslationOptions'

export function RepairSection() {
    const t = useTranslations('CarActionForm')

    const { interaction } = useInteractionContext()
    const { repairList } = interaction as IRepair

    const messages = useMessages() as unknown as Translation
    const repairOptionsKeys = Object.keys(
        messages.CarActionForm.repair_work.options
    ) as unknown as RepairOptions[]

    const repairListFiltered = useMemo(
        () => repairOptionsKeys.filter(i => repairList?.includes(i)),
        [repairList, repairOptionsKeys]
    )

    return (
        <Section header={t('repair_work.title')}>
            {repairListFiltered.map(i => (
                <Cell key={i}>{t(`repair_work.options.${i}`)}</Cell>
            ))}
        </Section>
    )
}
