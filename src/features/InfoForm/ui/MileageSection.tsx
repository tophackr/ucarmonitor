'use client'

import { Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { Controller, useFormContext } from 'react-hook-form'
import { CarOdometerUnits } from '@/entities/car'
import { IconCell } from '@/shared/ui/cell'
import { IconInput, IconSelect } from '@/shared/ui/form'
import { useEngineHours } from './hooks/useEngineHours'
import { useOdometerUnits } from './hooks/useOdometerUnits'
import type { CarMileageForm } from './types/FormContext'

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
            <IconInput
                type={'number'}
                status={errors.mileage && 'error'}
                icon={'MousePointer2'}
                bgColor={'DodgerBlue'}
                header={t('mileage', {
                    unit: t(`odometer.units.${unit}`)
                })}
                placeholder={t('mileage', {
                    unit: t(`odometer.units.${unit}`)
                })}
                {...register('mileage', {
                    required: t('errors.mileage_required'),
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.mileage_min') }
                })}
            />

            <IconSelect
                icon={'Milestone'}
                bgColor={'SlateGray'}
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
            </IconSelect>

            <IconCell
                icon={'FolderClock'}
                bgColor={'LimeGreen'}
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
            </IconCell>

            {engineEnabled && (
                <IconInput
                    icon={'Clock'}
                    bgColor={'MediumPurple'}
                    header={t('engine_hours.title')}
                    placeholder={t('engine_hours.title')}
                    {...register('engineHours', {
                        valueAsNumber: true,
                        min: { value: 0, message: t('errors.engine_hours_min') }
                    })}
                />
            )}
        </Section>
    )
}
