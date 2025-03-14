'use client'

import { Input, Section, Select } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import { TiresFormType, TiresType, WheelsType } from '@/entities/interaction'
import { useTiresForm } from '../hooks/useTiresForm'
import type { TiresInfoForm } from '../types/TiresForm'

export function InfoInputs(): JSX.Element {
    const t = useTranslations('CarActionForm.tires')

    const { register } = useFormContext<TiresInfoForm>()

    const { tiresType } = useTiresForm()

    return (
        <Section header={t('tires_n_wheels')}>
            <Select {...register('formType', { required: true })}>
                <option value={TiresFormType.tires}>{t('tires')}</option>
                <option value={TiresFormType.wheels}>{t('wheels')}</option>
            </Select>

            {tiresType === TiresFormType.tires ? (
                <Select {...register('tiresType')}>
                    <option
                        value={0}
                        disabled
                    >
                        {t('seasonality.title')}
                    </option>

                    {Object.values(TiresType).map(type => (
                        <option
                            key={type}
                            value={type}
                        >
                            {t(`seasonality.options.${type}`)}
                        </option>
                    ))}
                </Select>
            ) : (
                <Select {...register('wheelsType')}>
                    <option
                        value={0}
                        disabled
                    >
                        {t('type.title')}
                    </option>

                    {Object.values(WheelsType).map(type => (
                        <option
                            key={type}
                            value={type}
                        >
                            {t(`type.options.${type}`)}
                        </option>
                    ))}
                </Select>
            )}

            <Input
                placeholder={t('brand')}
                {...register('brand')}
            />
            <Input
                placeholder={t('model')}
                {...register('model')}
            />
        </Section>
    )
}
