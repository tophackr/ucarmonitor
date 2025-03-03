'use client'

import { Section } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useCarContext } from '@/entities/cars'
import { useIsAppleClient } from '@/shared/hooks'
import { AfterRefueling } from './AfterRefueling'
import { BeforeRefueling } from './BeforeRefueling'
import { CapacitySwitch } from './CapacitySwitch'
import { CharacteristicInputs } from './CharacteristicInputs'

export function FuelSection() {
    const t = useTranslations('CarActionForm.fuel')

    const { car } = useCarContext()

    const isApple = useIsAppleClient()

    return (
        <>
            <CharacteristicInputs />

            <Section.Header
                large={true}
                className={clsx(isApple && '!pb-0 !pt-4 !mb-0')}
            >
                {t('amount_fuel_tank')}
            </Section.Header>

            <BeforeRefueling fuelCapacity={car?.fuelCapacity} />

            <AfterRefueling fuelCapacity={car?.fuelCapacity} />

            <CapacitySwitch fuelCapacity={car?.fuelCapacity} />
        </>
    )
}
