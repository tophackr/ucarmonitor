import type { useFormatter } from 'next-intl'

export function getIntlUnit(
    format: ReturnType<typeof useFormatter>,
    value: number,
    unit: string
) {
    return format.number(value, {
        style: 'unit',
        unit
    })
}
