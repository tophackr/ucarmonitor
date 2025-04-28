'use client'

import { Cell, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import type { FuelInteractionData } from '@/entities/interaction'
import { callMultiple } from '@/shared/lib/dom'
import { useRefuel } from './hooks/useRefuel'
import type { FuelCapacityProps } from './types/FuelCapacity'

export const CapacitySwitch = memo(function CapacitySwitch({
    fuelCapacity
}: FuelCapacityProps): JSX.Element {
    const t = useTranslations('CarActionForm.fuel')

    const { control } = useFormContext<FuelInteractionData>()

    const { onFullChange } = useRefuel(fuelCapacity)

    return (
        <Section>
            <Cell
                after={
                    <Controller
                        control={control}
                        name={'data.capacityFull'}
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
})
