import { oneDayInMs } from '@/shared/model'
import { useFuelInteractions } from './useFuelInteractions'

export function useBetweenDays(): number {
    const interactions = useFuelInteractions()

    if (!interactions.length) {
        return 0
    }

    const firstDate = new Date(interactions[0].date).getTime()
    const lastDate = new Date(
        interactions[interactions.length - 1].date
    ).getTime()

    const differenceInMilliseconds = firstDate - lastDate
    const differenceInDays = differenceInMilliseconds / oneDayInMs

    return differenceInDays
}
