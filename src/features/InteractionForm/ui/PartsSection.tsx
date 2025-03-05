'use client'

import { Cell, Multiselectable, Section } from '@telegram-apps/telegram-ui'
import { useMessages, useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import type { IParts } from '@/entities/interaction'
import type { Translation } from '@/shared/i18n'
import type { PartsOptions } from '../model/TranslationOptions'

export function PartsSection() {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<IParts>()

    const messages = useMessages() as unknown as Translation
    const partsOptionsKeys = Object.keys(
        messages.CarActionForm.parts_work.options
    ) as unknown as PartsOptions[]

    return (
        <Section header={t('parts_work.title')}>
            {partsOptionsKeys.map(i => (
                <Cell
                    key={i}
                    Component={'label'}
                    before={
                        <Multiselectable
                            value={i}
                            {...register('partsList', {
                                required: t('errors.repair_work_required')
                            })}
                        />
                    }
                >
                    {t(`parts_work.options.${i}`)}
                </Cell>
            ))}
        </Section>
    )
}
