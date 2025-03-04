import { CarOdometerUnits } from '../types'

export function useIntlUnit(
    locale: string,
    unit: CarOdometerUnits,
    value?: number
): string | undefined {
    if (!value) return undefined

    return new Intl.NumberFormat(locale, {
        style: 'unit',
        unit: unit === CarOdometerUnits.kilometers ? 'kilometer' : 'mile'
    }).format(value)
}
