'use client'

import { Cell, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'
import { callMultiple } from '@/shared/utils'
import { useRefuel } from './hooks/useRefuel'
import type { FuelCapacityProps } from './types/FuelCapacity'
import type { FuelForm } from './types/FuelForm'

export function CapacitySwitch({ fuelCapacity }: FuelCapacityProps) {
    const t = useTranslations('CarActionForm.fuel')

    const { control } = useFormContext<FuelForm>()

    const { onFullChange } = useRefuel(fuelCapacity)

    return (
        <Section>
            <Cell
                after={
                    <Controller
                        control={control}
                        name={'capacityFull'}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Switch
                                onBlur={onBlur}
                                onChange={() =>
                                    callMultiple(
                                        onChange(!value),
                                        onFullChange(value ?? false)
                                    )
                                }
                                checked={value ?? false}
                            />
                        )}
                    />
                }
            >
                {t('capacity_full')}
            </Cell>
        </Section>
    )
}
