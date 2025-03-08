'use client'

import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { CarFuel } from '@/entities/car'
import { IconInput, IconSelect } from '@/shared/ui/form'
import type { CarFuelForm } from './types/FormContext'

export function FuelSection() {
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
                    min: { value: 0, message: t('errors.negative_number') }
                })}
            />
            <IconSelect
                icon={'Weight'}
                bgColor={'MediumPurple'}
                header={t('fuel.title')}
                {...register('fuel', { required: true })}
            >
                {Object.values(CarFuel).map(fuel => (
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
