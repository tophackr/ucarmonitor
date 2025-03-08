'use client'

import { Cell, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'
import { IconBeforeCell } from '@/shared/ui/cell'
import type { CarDefaultFrom } from './types/FormContext'

export function DefaultSection() {
    const t = useTranslations('CarInfo')

    const { control } = useFormContext<CarDefaultFrom>()

    return (
        <Section>
            <Cell
                before={
                    <IconBeforeCell
                        icon={'CircleCheck'}
                        bgColor={'MediumPurple'}
                    />
                }
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
            </Cell>
        </Section>
    )
}
