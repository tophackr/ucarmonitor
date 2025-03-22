import { cloudStorage } from '@telegram-apps/sdk-react'
import type { IRepair } from '../../model/Repair'
import { defaultRepair } from './constants/default'

const itemName = 'REPAIR_STORE'

export async function getRepairs(): Promise<IRepair[]> {
    if (!cloudStorage.isSupported()) return defaultRepair

    const items = await cloudStorage.getItem(itemName)

    return items ? JSON.parse(items) : defaultRepair
}

export async function setRepairs(items?: IRepair[]): Promise<void> {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(
            itemName,
            JSON.stringify(items || defaultRepair)
        )
    }
}
