'use client'

import { Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'
import { IconCell } from '@/shared/ui/cell'
import type { CarDefaultFrom } from './types/FormContext'

export function DefaultSection() {
    const t = useTranslations('CarInfo')

    const { control } = useFormContext<CarDefaultFrom>()

    return (
        <Section>
            <IconCell
                icon={'CircleCheck'}
                bgColor={'MediumPurple'}
                after={
                    <Controller
                        control={control}
                        name={'default'}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Switch
                                onBlur={onBlur}
                                onChange={() => onChange(!value)}
                                checked={value}
                            />
                        )}
                    />
                }
            >
                {t('default')}
            </IconCell>
        </Section>
    )
}
