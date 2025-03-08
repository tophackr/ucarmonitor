import omitBy from 'lodash.omitby'

export function removeEmptyValues<T extends object>(
    obj: T,
    removeZero: boolean = false
): T {
    const emptyArr = [null, NaN, undefined, '']

    if (removeZero) {
        emptyArr.push(0)
    }

    return omitBy(obj, value =>
        emptyArr.includes(value as string | number | null | undefined)
    ) as T
}
