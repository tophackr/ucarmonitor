export function reduceSumItems<T>(items: T[], value: keyof T): number {
    return items.reduce((acc, item) => {
        const itemValue = item[value]

        if (!['undefined', 'number'].includes(typeof itemValue)) {
            throw new Error(
                `${value.toString()} is not type of Number. Is type '${typeof itemValue}'.`
            )
        }

        return acc + ((itemValue as number) ?? 0)
    }, 0)
}
