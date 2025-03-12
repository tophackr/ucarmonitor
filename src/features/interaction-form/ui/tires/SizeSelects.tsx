'use client'

import { Section, Select } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { type ITires, TiresFormType } from '@/entities/interaction'
import { generateArray } from '../../model/generateArray'

export function SizeSelects() {
    const t = useTranslations('CarActionForm.tires')

    const { register, watch } = useFormContext<ITires>()

    const watchFormType = watch('formType')

    const tiresWidth = useMemo(() => generateArray(125, 10, 29), [])
    const wheelsWidth = useMemo(() => generateArray(4, 0.5, 17), [])
    const height = useMemo(() => generateArray(25, 5, 15), [])
    const diameter = useMemo(() => generateArray(12, 1, 15, x => `R${x}`), [])

    return (
        <Section header={t('size')}>
            <Select {...register('width')}>
                <option
                    value={0}
                    disabled
                >
                    {t('width')}
                </option>

                {(watchFormType === TiresFormType.tires
                    ? tiresWidth
                    : wheelsWidth
                ).map(i => (
                    <option
                        key={i}
                        value={i}
                    >
                        {i}
                    </option>
                ))}
            </Select>

            {watchFormType === TiresFormType.tires && (
                <Select {...register('height')}>
                    <option
                        value={0}
                        disabled
                    >
                        {t('height')}
                    </option>

                    {height.map(i => (
                        <option
                            key={i}
                            value={i}
                        >
                            {i}
                        </option>
                    ))}
                </Select>
            )}

            <Select {...register('diameter')}>
                <option
                    value={0}
                    disabled
                >
                    {t('diameter')}
                </option>

                {diameter.map(i => (
                    <option
                        key={i}
                        value={i}
                    >
                        {i}
                    </option>
                ))}
            </Select>
        </Section>
    )
}
