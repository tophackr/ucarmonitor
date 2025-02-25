import omitBy from 'lodash.omitby'

export function removeEmptyValues<T extends object>(obj: T): T {
    return omitBy(obj, value =>
        [null, NaN, undefined, ''].includes(
            value as string | number | null | undefined
        )
    ) as T
}
