import { toFixedNumber } from '@/shared/utils'

export function getCapacity(percent: number, capacity: number): number {
    return toFixedNumber(percent * 0.01 * capacity)
}
