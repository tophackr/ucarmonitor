import { CarActionCategory } from '@/entities/cars'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const moreContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarActionCategory.carPurchases,
            icon: 'Gift',
            bgColor: 'LimeGreen'
        },
        {
            name: CarActionCategory.tuning,
            icon: 'CircuitBoard',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarActionCategory.driverSalary,
            icon: 'Coins',
            bgColor: 'Orange'
        }
    ]

    return generateContents(id, t, data, 'more')
}
