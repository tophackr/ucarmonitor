import { Cell, Input, Section, Switch } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import type { RepairProps, RepairsProps } from '../model/Props'

export function RepairField({ repair: { option } }: RepairProps) {
    const t = useTranslations('Repair')

    const {
        register,
        formState: { errors },
        control
    } = useFormContext<RepairsProps>()
    const { fields } = useFieldArray({
        control,
        name: 'repairs'
    })

    const fieldIndex = fields.findIndex(f => f.option === option)

    return (
        <Section header={t(`options.${option}`)}>
            <Input
                type={'number'}
                status={errors.repairs?.[fieldIndex]?.mileage && 'error'}
                placeholder={t('mileage')}
                {...register(`repairs.${fieldIndex}.mileage`, {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.interval_min') }
                })}
            />
            <Input
                type={'number'}
                status={errors.repairs?.[fieldIndex]?.days && 'error'}
                placeholder={t('days')}
                {...register(`repairs.${fieldIndex}.days`, {
                    valueAsNumber: true,
                    min: { value: 0, message: t('errors.interval_min') }
                })}
            />
            <Cell
                after={
                    <Controller
                        control={control}
                        name={`repairs.${fieldIndex}.isVisible`}
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
                {t('visible')}
            </Cell>
        </Section>
    )
}
