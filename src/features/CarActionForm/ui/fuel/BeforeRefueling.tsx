'use client'

import { Input, Section, Slider, Text } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { LucideIcon } from '@/shared/ui'
import { useRefuel } from './hooks/useRefuel'
import type { FuelCapacityProps } from './types/FuelCapacity'
import type { FuelForm } from './types/FuelForm'

export function BeforeRefueling({ fuelCapacity }: FuelCapacityProps) {
    const t = useTranslations('CarActionForm')

    const { register } = useFormContext<FuelForm>()

    const { beforeRefuel, onBeforeChange } = useRefuel(fuelCapacity)

    return (
        <Section header={t('fuel.before_refueling')}>
            <Input
                type={'number'}
                after={
                    <Text className={'flex items-center gap-x-1 text-hint'}>
                        {beforeRefuel}
                        <LucideIcon
                            name={'Percent'}
                            size={16}
                        />
                    </Text>
                }
                {...register('beforeRefueling', {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.before_refueling_min') }
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
                value={beforeRefuel}
                onChange={onBeforeChange}
            />
        </Section>
    )
}
