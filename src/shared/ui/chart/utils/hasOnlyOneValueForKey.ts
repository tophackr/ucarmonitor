export function hasOnlyOneValueForKey(
    array: never[],
    keyToCheck: string
): boolean {
    const val: never[] = []

    for (const obj of array) {
        if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
            val.push(obj[keyToCheck])
            if (val.length > 1) {
                return false
            }
        }
    }

    return true
}
