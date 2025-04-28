'use client'

import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'
import { valueAsStringOrNull } from '@/shared/lib/form'
import { IconInput } from '@/shared/ui/form'
import type { CarInfoForm } from './types/FormContext'

export function InfoSection(): JSX.Element {
    const t = useTranslations('CarInfo')

    const {
        register,
        formState: { errors }
    } = useFormContext<CarInfoForm>()

    return (
        <Section
            header={t('sections.info')}
            className={'row-span-2'}
        >
            <IconInput
                status={errors.brand && 'error'}
                icon={'CarFront'}
                bgColor={'DodgerBlue'}
                header={t('brand')}
                placeholder={t('brand')}
                {...register('brand', { required: t('errors.brand_required') })}
            />
            <IconInput
                icon={'IdCard'}
                bgColor={'LimeGreen'}
                header={t('model')}
                placeholder={t('model')}
                {...register('model', {
                    setValueAs: valueAsStringOrNull
                })}
            />
            <IconInput
                icon={'Pencil'}
                bgColor={'SlateGray'}
                header={t('name')}
                placeholder={t('name')}
                {...register('name', {
                    setValueAs: valueAsStringOrNull
                })}
            />
            <IconInput
                type={'number'}
                status={errors.year && 'error'}
                icon={'Calendar'}
                bgColor={'OrangeRed'}
                header={t('year')}
                placeholder={t('year')}
                {...register('year', {
                    valueAsNumber: true,
                    min: { value: 1900, message: t('errors.year_min') },
                    max: { value: 2100, message: t('errors.year_max') },
                    minLength: {
                        value: 4,
                        message: t('errors.year_min_length')
                    },
                    maxLength: {
                        value: 4,
                        message: t('errors.year_max_length')
                    }
                })}
            />
        </Section>
    )
}
