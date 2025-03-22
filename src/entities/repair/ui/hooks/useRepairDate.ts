import { useFormatter } from 'next-intl'
import { getIntlUnit } from '@/shared/i18n'
import { getPercent } from '@/shared/lib/number'

interface UseRepairDateReturn {
    days?: string
    percent: number
}

export function useRepairDate(days?: number, date?: Date): UseRepairDateReturn {
    const formatter = useFormatter()

    if (!days || !date) {
        return {
            days: undefined,
            percent: 0
        }
    }

    const currentDate = new Date()

    const timeDiff = currentDate.getTime() - new Date(date).getTime()
    const diffInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

    const nextReplacementDays = days - diffInDays
    const nextReplacementDaysOrZero = nextReplacementDays ?? 0
    const nextReplacementDaysFixed = Math.min(days, nextReplacementDaysOrZero)

    const nextDays = getIntlUnit(formatter, nextReplacementDaysFixed, 'day')
    const daysPercent = getPercent(
        nextReplacementDaysFixed ? days - nextReplacementDaysFixed : 0,
        days
    )

    return { days: nextDays, percent: daysPercent }
}
