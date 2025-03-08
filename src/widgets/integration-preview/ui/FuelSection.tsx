'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useCarContext } from '@/entities/car'
import { type IFuel, useInteractionContext } from '@/entities/interaction'
import { toFixedNumber } from '@/shared/lib'

export function FuelSection() {
    const t = useTranslations('CarActionForm.fuel')

    const { car } = useCarContext()

    const { interaction } = useInteractionContext()
    const { fuelGrade, capacity, price, beforeRefueling, afterRefueling } =
        interaction as IFuel

    const fuelCapacity = car.fuelCapacity ?? 45

    return (
        <>
            <Section header={t('title')}>
                <Cell subhead={t('grade.title')}>
                    {t(`grade.options.${fuelGrade}`)}
                </Cell>
                {capacity && <Cell subhead={t('capacity')}>{capacity}</Cell>}
                {price && <Cell subhead={t('price')}>{price}</Cell>}
            </Section>

            {(beforeRefueling || afterRefueling) && (
                <Section header={t('amount_fuel_tank')}>
                    {beforeRefueling && (
                        <Cell
                            subhead={t('before_refueling')}
                            after={`${toFixedNumber((beforeRefueling / fuelCapacity) * 100)} %`}
                        >
                            {beforeRefueling} / {fuelCapacity}
                        </Cell>
                    )}
                    {afterRefueling && (
                        <Cell
                            subhead={t('after_refueling')}
                            after={`${toFixedNumber((afterRefueling / fuelCapacity) * 100)} %`}
                        >
                            {afterRefueling} / {fuelCapacity}
                        </Cell>
                    )}
                </Section>
            )}
        </>
    )
}
