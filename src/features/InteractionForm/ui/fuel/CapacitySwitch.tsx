'use client'

import { Cell, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import type { IFuel } from '@/entities/interaction'
import { callMultiple } from '@/shared/lib'
import { useRefuel } from '../hooks/useRefuel'
import type { FuelCapacityProps } from '../types/FuelCapacity'

export const CapacitySwitch = memo(function CapacitySwitch({
    fuelCapacity
}: FuelCapacityProps) {
    const t = useTranslations('CarActionForm.fuel')

    const { control } = useFormContext<IFuel>()

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
})
