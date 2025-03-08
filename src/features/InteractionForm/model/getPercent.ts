import { toFixedNumber } from '@/shared/lib/number'

export function getPercent(value: number, capacity: number): number {
    const valueNumber = Number(value) || 0

    return toFixedNumber((valueNumber / capacity) * 100, 0)
}
