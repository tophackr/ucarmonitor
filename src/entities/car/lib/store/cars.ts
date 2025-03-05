import { cloudStorage } from '@telegram-apps/sdk-react'
import type { ICar } from '../../model/Car'

export const itemName = 'cars'

export const defaultCars = []

export async function getCars(): Promise<ICar[]> {
    if (!cloudStorage.isSupported()) return defaultCars

    const items = await cloudStorage.getItem(itemName)

    return items ? JSON.parse(items) : defaultCars
}

export async function setCars(items?: ICar[]) {
    if (cloudStorage.isSupported()) {
        await cloudStorage.setItem(
            itemName,
            JSON.stringify(items || defaultCars)
        )
    }
}
