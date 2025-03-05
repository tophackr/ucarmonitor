'use client'

import { Input, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { IconCell } from '@/shared/ui'
import type { CarInfoForm } from '../model/FormContext'

export function InfoSection() {
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
            <Input
                status={errors.brand && 'error'}
                before={
                    <IconCell
                        icon={'CarFront'}
                        bgColor={'DodgerBlue'}
                    />
                }
                header={t('brand')}
                placeholder={t('brand')}
                {...register('brand', { required: t('errors.brand_required') })}
            />
            <Input
                before={
                    <IconCell
                        icon={'IdCard'}
                        bgColor={'LimeGreen'}
                    />
                }
                header={t('model')}
                placeholder={t('model')}
                {...register('model')}
            />
            <Input
                before={
                    <IconCell
                        icon={'Pencil'}
                        bgColor={'SlateGray'}
                    />
                }
                header={t('name')}
                placeholder={t('name')}
                {...register('name')}
            />
            <Input
                type={'number'}
                status={errors.year && 'error'}
                min={1900}
                max={2100}
                minLength={4}
                maxLength={4}
                before={
                    <IconCell
                        icon={'Calendar'}
                        bgColor={'OrangeRed'}
                    />
                }
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
