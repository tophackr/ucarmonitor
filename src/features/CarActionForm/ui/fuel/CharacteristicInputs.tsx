'use client'

import { Input, Section, Select } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { type FuelForm } from './types/FuelForm'
import { FuelGrade } from './types/FuelGrade'

export function CharacteristicInputs() {
    const t = useTranslations('CarActionForm.fuel')

    const { register } = useFormContext<FuelForm>()

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
