import { useFormatter, useLocale } from 'next-intl'
import { daysAfterToday } from '../../utils/daysAfterToday'

export function useIntlTimeAgo(value: Date) {
    const format = useFormatter()
    const locale = useLocale()

    const diffInDays = daysAfterToday(value) + 1

    if (diffInDays >= -1 && diffInDays <= 1) {
        return new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
            diffInDays,
            'day'
        )
    }

    return format.dateTime(new Date(value))
}
