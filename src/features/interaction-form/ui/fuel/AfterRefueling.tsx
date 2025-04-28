'use client'

import { Input, Section, Slider, Text } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { useFormContext } from 'react-hook-form'
import type { FuelInteractionData } from '@/entities/interaction'
import { Icon } from '@/shared/ui/icon'
import { useRefuel } from './hooks/useRefuel'
import type { FuelCapacityProps } from './types/FuelCapacity'

export const AfterRefueling = memo(function AfterRefueling({
    fuelCapacity
}: FuelCapacityProps): JSX.Element {
    const t = useTranslations('CarActionForm')

    const {
        register,
        formState: { errors }
    } = useFormContext<FuelInteractionData>()

    const { afterRefuel, onAfterChange } = useRefuel(fuelCapacity)

    return (
        <Section header={t('fuel.after_refueling')}>
            <Input
                status={errors.data?.afterRefueling && 'error'}
                after={
                    <Text className={'text-hint flex items-center gap-x-1'}>
                        {afterRefuel}
                        <Icon
                            name={'Percent'}
                            size={16}
                        />
                    </Text>
                }
                {...register('data.afterRefueling', {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.after_refueling_min') }
                })}
            />
            <Slider
                after={
                    <Icon
                        name={'Percent'}
                        size={20}
                        className={'text-subtitle'}
                    />
                }
                value={afterRefuel}
                onChange={onAfterChange}
            />
        </Section>
    )
})
