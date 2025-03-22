'use client'

import { Cell, Multiselectable, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IRepairInteraction } from '@/entities/interaction'
import { useMessagesKeys } from '@/shared/i18n'

export function RepairSection(): JSX.Element {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<IRepairInteraction>()

    const repairOptionsKeys = useMessagesKeys(
        'CarActionForm',
        'repair_work',
        'options'
    )

    return (
        <Section header={t('repair_work.title')}>
            {repairOptionsKeys.map(i => (
                <Cell
                    key={i}
                    Component={'label'}
                    before={
                        <Multiselectable
                            value={i}
                            {...register('repairList', {
                                required: t('errors.repair_work_required')
                            })}
                        />
                    }
                >
                    {t(`repair_work.options.${i}`)}
                </Cell>
            ))}
        </Section>
    )
}
