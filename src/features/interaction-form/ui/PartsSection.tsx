'use client'

import { Cell, Multiselectable, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IPartsInteraction } from '@/entities/interaction'
import { useMessagesKeys } from '@/shared/i18n'

export function PartsSection(): JSX.Element {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<IPartsInteraction>()

    const partsOptionsKeys = useMessagesKeys(
        'CarActionForm',
        'parts_work',
        'options'
    )

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
