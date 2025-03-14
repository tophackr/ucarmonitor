export function findById<T extends { id: string }>(
    items: T[],
    itemId: string
): T | undefined {
    return items.find(item => item.id === itemId)
}
