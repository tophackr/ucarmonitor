export function isToday(value: Date) {
    const nowDate = new Date()
    const date = new Date(value)

    const diffInMs = nowDate.getTime() - date.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    return diffInDays === 0
}
