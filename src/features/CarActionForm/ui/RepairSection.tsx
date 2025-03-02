'use client'

import { Cell, Multiselectable, Section } from '@telegram-apps/telegram-ui'
import { useMessages, useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import type { IRepair } from '@/entities/interaction'
import type { Translation } from '@/shared/i18n'
import type { RepairOptions } from '../types/TranslationOptions'

export function RepairSection() {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<IRepair>()

    const messages = useMessages() as unknown as Translation
    const repairOptionsKeys = Object.keys(
        messages.CarActionForm.repair_work.options
    ) as unknown as RepairOptions[]

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
