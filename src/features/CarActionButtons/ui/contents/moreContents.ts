import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { CarCategory } from '../../types/CarCategories'
import { generateContents } from '../utils/generateContents'

export const moreContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarCategory.carPurchases,
            icon: 'Gift',
            bgColor: 'LimeGreen'
        },
        {
            name: CarCategory.tuning,
            icon: 'CircuitBoard',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarCategory.driverSalary,
            icon: 'Coins',
            bgColor: 'Orange'
        }
    ]

    return generateContents(id, t, data, 'more')
}
