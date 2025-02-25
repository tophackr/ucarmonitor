'use client'

import {
    Cell,
    Input,
    Section,
    Select,
    Switch
} from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'
import { CarOdometerUnits } from '@/entities/cars'
import { IconCell } from '@/shared/ui'
import { useEngineHours } from '../hooks/useEngineHours'
import { useOdometerUnits } from '../hooks/useOdometerUnits'
import type { CarMileageForm } from '../types/FormContext'

export function MileageSection() {
    const t = useTranslations('CarInfo')

    const {
        register,
        getValues,
        watch,
        control,
        formState: { errors }
    } = useFormContext<CarMileageForm>()

    const { odometerUnits, engineHoursEnabled } = getValues()

    const { unit } = useOdometerUnits(watch, odometerUnits)
    const { engineEnabled } = useEngineHours(watch, engineHoursEnabled)

    return (
        <Section header={t('sections.mileage')}>
            <Input
                type={'number'}
                status={errors.mileage && 'error'}
                before={
                    <IconCell
                        icon={'MousePointer2'}
                        bgColor={'DodgerBlue'}
                    />
                }
                header={t('mileage', {
                    unit: t(`odometer.units.${unit}`)
                })}
                placeholder={t('mileage', {
                    unit: t(`odometer.units.${unit}`)
                })}
                {...register('mileage', {
                    required: t('errors.mileage_required'),
                    valueAsNumber: true,
                    min: t('errors.negative_number')
                })}
            />

            <Select
                before={
                    <IconCell
                        icon={'Milestone'}
                        bgColor={'SlateGray'}
                    />
                }
                header={t('odometer.title')}
                {...register('odometerUnits', { required: true })}
            >
                {Object.values(CarOdometerUnits).map(fuel => (
                    <option
                        key={fuel}
                        value={fuel}
                    >
                        {t(`odometer.units_full.${fuel}`)}
                    </option>
                ))}
            </Select>

            <Cell
                before={
                    <IconCell
                        icon={'FolderClock'}
                        bgColor={'LimeGreen'}
                    />
                }
                after={
                    <Controller
                        control={control}
                        name={'engineHoursEnabled'}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Switch
                                onBlur={onBlur}
                                onChange={() => onChange(!value)}
                                checked={value}
                            />
                        )}
                    />
                }
            >
                {t('engine_hours.enabled')}
            </Cell>

            {engineEnabled && (
                <Input
                    before={
                        <IconCell
                            icon={'Clock'}
                            bgColor={'MediumPurple'}
                        />
                    }
                    header={t('engine_hours.title')}
                    placeholder={t('engine_hours.title')}
                    {...register('engineHours')}
                />
            )}
        </Section>
    )
}
