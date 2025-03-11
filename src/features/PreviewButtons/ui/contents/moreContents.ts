import { InteractionCategory } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../types/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const moreContents = (
    id: string,
    t: NestedTranslationClient<'CarCategoryName'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: InteractionCategory.carPurchases,
            icon: 'Gift',
            bgColor: 'LimeGreen'
        },
        {
            name: InteractionCategory.tuning,
            icon: 'CircuitBoard',
            bgColor: 'DodgerBlue'
        },
        {
            name: InteractionCategory.driverSalary,
            icon: 'Coins',
            bgColor: 'Orange'
        }
    ]

    return generateContents(id, t, data)
}
