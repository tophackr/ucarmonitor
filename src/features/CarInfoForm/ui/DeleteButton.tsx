'use client'

import { ButtonCell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { CarIdProps } from '@/entities/cars'
import { useDeleteCar } from '../hooks/useDeleteCar'

export function DeleteButton({ carId }: CarIdProps) {
    const t = useTranslations('CarInfo')

    const deleteCallback = useDeleteCar(carId)

    return (
        <Section>
            <ButtonCell
                mode={'destructive'}
                className={'justify-center'}
                onClick={deleteCallback}
            >
                {t('delete')}
            </ButtonCell>
        </Section>
    )
}
