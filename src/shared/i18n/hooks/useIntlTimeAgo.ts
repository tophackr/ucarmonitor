import { useLocale } from 'next-intl'
import { daysAfterToday } from '../../utils/daysAfterToday'
import { useIntlDateTime } from './useIntlDateTime'

export function useIntlTimeAgo(value: Date) {
    const locale = useLocale()
    const date = useIntlDateTime(value)

    const diffInDays = daysAfterToday(value) + 1

    if (diffInDays >= -1 && diffInDays <= 1) {
        return new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
            diffInDays,
            'day'
        )
    }

    return date
}
