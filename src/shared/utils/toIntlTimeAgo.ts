export function toIntlTimeAgo(locale: string, value: Date) {
    const nowDate = new Date()
    const date = new Date(value)

    const diffInMs = date.getTime() - nowDate.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1

    if (diffInDays >= -1 && diffInDays <= 1) {
        return new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
            diffInDays,
            'day'
        )
    }

    return new Intl.DateTimeFormat(locale).format(date)
}
