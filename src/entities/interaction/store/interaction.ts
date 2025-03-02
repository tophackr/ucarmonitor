import { cloudStorage } from '@telegram-apps/sdk-react'
import type { IInteraction } from '../types'

const itemName = 'INTERACTION_STORE'

export const defaultInteraction = []

export async function getInteractions(): Promise<IInteraction[]> {
    if (!cloudStorage.isSupported()) return defaultInteraction

    const items = await cloudStorage.getItem(itemName)

    return items ? JSON.parse(items) : defaultInteraction
}

export async function setInteractions(items?: IInteraction[]) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(
            itemName,
            JSON.stringify(items || defaultInteraction)
        )
    }
}
