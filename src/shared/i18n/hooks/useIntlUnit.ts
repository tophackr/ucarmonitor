import { useFormatter } from 'next-intl'
import { getIntlUnit } from '../utils/getIntlUnit'

export function useIntlUnit(unit: string, value?: number): string | undefined {
    const format = useFormatter()

    if (!value && value !== 0) {
        return undefined
    }

    return getIntlUnit(format, value, unit)
}
