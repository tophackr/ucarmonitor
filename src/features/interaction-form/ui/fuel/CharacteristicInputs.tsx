'use client'

import { Input, Section, Select } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import { FuelGrade, type IFuel } from '@/entities/interaction'

export function CharacteristicInputs(): JSX.Element {
    const t = useTranslations('CarActionForm.fuel')

    const { register } = useFormContext<IFuel>()

    return (
        <Section header={t('title')}>
            <Select
                header={t('grade.title')}
                {...register('fuelGrade')}
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
                {...register('capacity')}
            />
            <Input
                header={t('price')}
                placeholder={t('price')}
                {...register('price')}
            />
        </Section>
    )
}
