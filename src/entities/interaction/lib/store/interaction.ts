import { cloudStorage } from '@telegram-apps/sdk-react'
import type { IInteraction } from '../../model/Interaction'

const itemName = 'INTERACTION_STORE'

export const defaultInteraction = []

export async function getInteractions(): Promise<IInteraction[]> {
    if (!cloudStorage.isSupported()) return defaultInteraction

    const items = await cloudStorage.getItem(itemName)

    return items ? JSON.parse(items) : defaultInteraction
}

export async function setInteractions(items?: IInteraction[]): Promise<void> {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(
            itemName,
            JSON.stringify(items || defaultInteraction)
        )
    }
}
