import { useFormatter } from 'next-intl'

export function useIntlUnit(unit: string, value?: number): string | undefined {
    const format = useFormatter()

    if (!value) {
        return undefined
    }

    return format.number(value, {
        style: 'unit',
        unit: unit
    })
}
