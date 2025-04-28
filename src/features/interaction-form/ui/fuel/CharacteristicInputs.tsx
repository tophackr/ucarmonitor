'use client'

import { Input, Section, Select } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import { FuelGrade, type FuelInteractionData } from '@/entities/interaction'

export function CharacteristicInputs(): JSX.Element {
    const t = useTranslations('CarActionForm.fuel')

    const { register } = useFormContext<FuelInteractionData>()

    return (
        <Section header={t('title')}>
            <Select
                header={t('grade.title')}
                {...register('data.fuelGrade')}
            >
                {Object.values(FuelGrade).map(type => (
                    <option
                        key={type}
                        value={type}
                    >
                        {t(`grade.options.${type}`)}
                    </option>
                ))}
            </Select>

            <Input
                header={t('capacity')}
                placeholder={t('capacity')}
                {...register('data.capacity', { valueAsNumber: true })}
            />
            <Input
                header={t('price')}
                placeholder={t('price')}
                {...register('data.price', { valueAsNumber: true })}
            />
        </Section>
    )
}
