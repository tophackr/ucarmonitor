'use client'

import {
    Caption,
    LargeTitle,
    Placeholder,
    Text
} from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useCarContext } from '@/entities/car'
import type { IFuelInteraction } from '@/entities/interaction'
import {
    getIntlPartType,
    useIntlCurrency,
    useIntlNumber,
    useIntlUnit
} from '@/shared/i18n'
import { ListSection } from '@/shared/ui'
import { LinkCell } from '@/shared/ui/cell'
import { fuelRoutes } from '../routes/fuel'
import { useBetweenDays } from './hooks/useBetweenDays'
import { useFuelData } from './hooks/useFuelData'
import { useFuelInteractions } from './hooks/useFuelInteractions'
import type { FuelLinkData } from './types/FuelLinkData'
import { calculateFuelConsumption } from './utils/calculateFuelConsumption'

export function StatsFuel() {
    const t = useTranslations('StatsFuel')

    const { fuelData } = useFuelData()
    const { fuelPer100km, costPerKm, distancePerLiter, costPerLiter } =
        calculateFuelConsumption(fuelData)

    const fuelInteractions = useFuelInteractions()
    const calcDays = useBetweenDays()

    const { car } = useCarContext()
    const intlCurrency = useIntlCurrency()
    const intlUnitOdometer = useIntlUnit(car.odometerUnits)
    const intlUnitLiter = useIntlUnit('liter')
    const intlNumber = useIntlNumber({ maximumFractionDigits: 2 })

    const currencySymbol = getIntlPartType(intlCurrency, 'currency')
    const odometerSymbol = getIntlPartType(intlUnitOdometer, 'unit')
    const literSymbol = getIntlPartType(intlUnitLiter, 'unit')

    const fuelConsumption = fuelInteractions.reduce((previous, current) => {
        const { capacity } = current as IFuelInteraction

        if (capacity) previous += Number(capacity)

        return previous
    }, 0)

    const linkData: FuelLinkData[] = [
        {
            href: fuelRoutes.consumption(car.id),
            count: fuelPer100km,
            symbol: literSymbol,
            text: t('consumption_per_100', { symbol: odometerSymbol })
        },
        {
            href: fuelRoutes.fuelConsumption(car.id),
            count: fuelConsumption,
            symbol: literSymbol,
            text: t('fuel_consumption')
        },
        {
            href: fuelRoutes.costPerMileage(car.id),
            count: costPerKm,
            symbol: currencySymbol,
            text: t('cost_per_1_mileage', { symbol: odometerSymbol })
        },
        {
            href: fuelRoutes.mileagePerUnit(car.id),
            count: distancePerLiter,
            symbol: odometerSymbol,
            text: t('mileage_per_1_unit', { symbol: literSymbol })
        },
        {
            href: fuelRoutes.costPerUnit(car.id),
            count: costPerLiter,
            symbol: currencySymbol,
            text: t('cost_per_1_unit', { symbol: literSymbol })
        }
    ]

    return (
        <ListSection>
            <div className={'grid grid-cols-2 justify-around'}>
                <Text className={'col-span-2 p-4 text-center'}>
                    {t('title')}
                </Text>
                <Placeholder
                    header={
                        <LargeTitle weight={'1'}>
                            {intlNumber.format(fuelPer100km)}
                        </LargeTitle>
                    }
                    description={`${literSymbol} / 100 ${odometerSymbol}`}
                    className={'py-0!'}
                />
                <Placeholder
                    header={
                        <LargeTitle weight={'1'}>
                            {intlNumber.format(costPerKm)}
                        </LargeTitle>
                    }
                    description={`${currencySymbol} / ${odometerSymbol}`}
                    className={'py-0!'}
                />
                <Caption className={'text-subtitle col-span-2 p-4 text-center'}>
                    {t('description', {
                        count: fuelInteractions.length,
                        days: calcDays
                    })}
                </Caption>
            </div>

            {linkData.map(({ href, count, symbol, text }, index) => (
                <LinkCell
                    key={index}
                    href={href}
                    text={
                        <>
                            {intlNumber.format(count)}
                            <small className={'ml-1'}>{symbol}</small>
                        </>
                    }
                >
                    {text}
                </LinkCell>
            ))}
        </ListSection>
    )
}
