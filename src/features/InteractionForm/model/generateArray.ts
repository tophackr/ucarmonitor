export function generateArray(
    start: number,
    step: number,
    length: number
): number[]

export function generateArray<T extends string | number>(
    start: number,
    step: number,
    length: number,
    formatter: (x: number) => T
): (number | T)[]

export function generateArray<T extends string | number>(
    start: number,
    step: number,
    length: number,
    formatter?: (x: number) => T
): (number | T)[] | number[] {
    return Array.from({ length }, (_, i) => {
        const value = start + i * step
        return formatter ? formatter(value) : value
    })
}
