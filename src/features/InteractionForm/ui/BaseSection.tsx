'use client'

import { FileInput, Section, Textarea } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCarContext } from '@/entities/car'
import {
    type IBaseInteraction,
    InteractionCategory
} from '@/entities/interaction'
import { CheckCell } from '@/shared/ui/cell'
import { IconInput } from '@/shared/ui/form'
import { Icon } from '@/shared/ui/icon'

interface BaseSectionProps {
    title: string
}

export const BaseSection = memo(function BaseSection({
    title
}: BaseSectionProps) {
    const t = useTranslations('CarActionForm')

    const { car } = useCarContext()

    const [files, setFiles] = useState<FileList | null>(null)

    const {
        register,
        formState: { errors },
        getValues
    } = useFormContext<IBaseInteraction>()

    return (
        <>
            <Section
                header={<Section.Header large={true}>{title}</Section.Header>}
            >
                <IconInput
                    type={'date'}
                    status={errors.date && 'error'}
                    icon={'Calendar'}
                    bgColor={'OrangeRed'}
                    placeholder={t('date')}
                    {...register('date', {
                        required: t('errors.date_required')
                    })}
                />
                <IconInput
                    type={'number'}
                    status={errors.mileage && 'error'}
                    icon={'Milestone'}
                    bgColor={'MediumPurple'}
                    placeholder={t('mileage')}
                    {...register('mileage', { valueAsNumber: true })}
                />

                {getValues('type') === InteractionCategory.mileage ? (
                    car.engineHoursEnabled && (
                        <IconInput
                            type={'number'}
                            icon={'Clock'}
                            bgColor={'MediumPurple'}
                            header={t('engine_hours')}
                            placeholder={t('engine_hours')}
                            {...register('engineHours', {
                                valueAsNumber: true,
                                min: {
                                    value: 0,
                                    message: t('errors.engine_hours_min')
                                }
                            })}
                        />
                    )
                ) : (
                    <IconInput
                        type={'number'}
                        status={errors.amount && 'error'}
                        icon={'LandPlot'}
                        bgColor={'Orange'}
                        placeholder={t('amount')}
                        {...register('amount', {
                            required: t('errors.amount_required'),
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: t('errors.amount_min')
                            }
                        })}
                    />
                )}
            </Section>

            <Section>
                <Textarea
                    header={t('description')}
                    placeholder={t('description')}
                    {...register('description')}
                />
                <FileInput
                    label={t('files')}
                    multiple
                    onChange={event => setFiles(event.target.files)}
                />
            </Section>

            <Section>
                {files &&
                    Array.from(files).map(file => (
                        <CheckCell
                            key={file.name}
                            after={
                                <Icon
                                    name={'CircleX'}
                                    className={'text-destructive'}
                                />
                            }
                            subtitle={`${file.size} bytes`}
                        >
                            {file.name}
                        </CheckCell>
                    ))}
            </Section>
        </>
    )
})
