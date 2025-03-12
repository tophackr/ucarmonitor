import { InteractionCategory, actionsRoute } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import { type IMenu, type KeyMenu, generateMenu } from '@/shared/lib/link-menu'

const moreData: KeyMenu<InteractionCategory>[] = [
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

export function moreContents(
    id: string,
    t: NestedTranslationClient<'CarCategoryName'>
): IMenu[] {
    const route = actionsRoute(id)

    return generateMenu(route.new, t, moreData)
}
