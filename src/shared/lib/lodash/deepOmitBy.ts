type ValueKeyIteratee<T> = (value: T) => boolean

export function deepOmitBy<T extends object>(
    obj: T,
    predicate: ValueKeyIteratee<T>
): T {
    if (Array.isArray(obj)) {
        return obj.map(item => deepOmitBy(item, predicate)) as unknown as T
    }

    if (obj && typeof obj === 'object' && obj.constructor === Object) {
        const result = {} as Record<string, unknown>

        for (const [key, value] of Object.entries(obj)) {
            const cleanedValue = deepOmitBy(value, predicate)

            if (!predicate(cleanedValue)) {
                result[key] = cleanedValue
            }
        }
        return result as T
    }

    return obj
}
