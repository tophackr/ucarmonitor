'use client'

import { Section, Select } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import type { SizesForm } from './types/SizesForm'
import { type TiresForm, TiresFormType } from './types/TiresForm'
import { generateDiameter } from './utils/generateDiameter'
import { generateHeight } from './utils/generateHeight'
import { generateWheelWidth } from './utils/generateWheelWidth'
import { generateWidth } from './utils/generateWidth'

export function SizeSelects() {
    const t = useTranslations('CarActionForm.tires')

    const { register, watch } = useFormContext<SizesForm & TiresForm>()

    const watchTiresType = watch('type')

    const tiresWidth = useMemo(generateWidth, [])
    const wheelsWidth = useMemo(generateWheelWidth, [])
    const height = useMemo(generateHeight, [])
    const diameter = useMemo(generateDiameter, [])

    return (
        <Section header={t('size')}>
            <Select {...register('width')}>
                <option
                    value={0}
                    disabled
                >
                    {t('width')}
                </option>

                {(watchTiresType === TiresFormType.tires
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

            {watchTiresType === TiresFormType.tires && (
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
