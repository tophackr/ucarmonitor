'use client'

import { Input, Section, Slider, Text } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import type { IFuel } from '@/entities/interaction'
import { LucideIcon } from '@/shared/ui'
import { useRefuel } from '../../hooks/useRefuel'
import type { FuelCapacityProps } from '../../types/FuelCapacity'

export function AfterRefueling({ fuelCapacity }: FuelCapacityProps) {
    const t = useTranslations('CarActionForm')

    const {
        register,
        formState: { errors }
    } = useFormContext<IFuel>()

    const { afterRefuel, onAfterChange } = useRefuel(fuelCapacity)

    return (
        <Section header={t('fuel.after_refueling')}>
            <Input
                status={errors.afterRefueling && 'error'}
                after={
                    <Text className={'flex items-center gap-x-1 text-hint'}>
                        {afterRefuel}
                        <LucideIcon
                            name={'Percent'}
                            size={16}
                        />
                    </Text>
                }
                {...register('afterRefueling', {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.after_refueling_min') }
                })}
            />
            <Slider
                after={
                    <LucideIcon
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
}
