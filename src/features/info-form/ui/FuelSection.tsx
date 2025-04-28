'use client'

import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import { FuelType } from '@/entities/car'
import { IconInput, IconSelect } from '@/shared/ui/form'
import type { CarFuelForm } from './types/FormContext'

export function FuelSection(): JSX.Element {
    const t = useTranslations('CarInfo')

    const {
        register,
        formState: { errors }
    } = useFormContext<CarFuelForm>()

    return (
        <Section header={t('sections.fuel')}>
            <IconInput
                type={'number'}
                status={errors.fuelCapacity && 'error'}
                icon={'Fuel'}
                bgColor={'Orange'}
                header={t('fuel.capacity')}
                placeholder={t('fuel.capacity')}
                {...register('fuelCapacity', {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.fuel_capacity_min') }
                })}
            />
            <IconSelect
                icon={'Weight'}
                bgColor={'MediumPurple'}
                header={t('fuel.title')}
                {...register('fuelType', { required: true })}
            >
                {Object.values(FuelType).map(fuel => (
                    <option
                        key={fuel}
                        value={fuel}
                    >
                        {t(`fuel.type.${fuel}`)}
                    </option>
                ))}
            </IconSelect>
        </Section>
    )
}
