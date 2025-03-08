export function findById<T extends { id: string }>(items: T[], itemId: string) {
    return items.find(item => item.id === itemId)
}
