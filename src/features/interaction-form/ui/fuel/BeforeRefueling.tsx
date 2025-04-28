'use client'

import { Input, Section, Slider, Text } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { useFormContext } from 'react-hook-form'
import type { FuelInteractionData } from '@/entities/interaction'
import { Icon } from '@/shared/ui/icon'
import { useRefuel } from './hooks/useRefuel'
import type { FuelCapacityProps } from './types/FuelCapacity'

export const BeforeRefueling = memo(function BeforeRefueling({
    fuelCapacity
}: FuelCapacityProps): JSX.Element {
    const t = useTranslations('CarActionForm')

    const {
        register,
        formState: { errors }
    } = useFormContext<FuelInteractionData>()

    const { beforeRefuel, onBeforeChange } = useRefuel(fuelCapacity)

    return (
        <Section header={t('fuel.before_refueling')}>
            <Input
                status={errors.data?.beforeRefueling && 'error'}
                type={'number'}
                after={
                    <Text className={'text-hint flex items-center gap-x-1'}>
                        {beforeRefuel}
                        <Icon
                            name={'Percent'}
                            size={16}
                        />
                    </Text>
                }
                {...register('data.beforeRefueling', {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.before_refueling_min') }
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
                value={beforeRefuel}
                onChange={onBeforeChange}
            />
        </Section>
    )
})
