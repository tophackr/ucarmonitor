'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { type IRepair, useInteractionContext } from '@/entities/interaction'
import { useMessagesKeys } from '@/shared/i18n'

export function RepairSection() {
    const t = useTranslations('CarActionForm')

    const { interaction } = useInteractionContext()
    const { repairList } = interaction as IRepair

    const repairOptionsKeys = useMessagesKeys(
        'CarActionForm',
        'repair_work',
        'options'
    )

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
