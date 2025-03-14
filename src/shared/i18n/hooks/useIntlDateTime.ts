import { useFormatter } from 'next-intl'

export function useIntlDateTime(value: Date): string {
    const format = useFormatter()

    return format.dateTime(new Date(value))
}
