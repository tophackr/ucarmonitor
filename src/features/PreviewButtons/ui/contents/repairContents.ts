import { InteractionCategory, actionsRoute } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import { type IMenu, type KeyMenu, generateMenu } from '@/shared/lib/link-menu'

const repairData: KeyMenu<InteractionCategory>[] = [
    {
        name: InteractionCategory.maintenance,
        icon: 'Bike',
        bgColor: 'MediumPurple'
    },
    {
        name: InteractionCategory.tireService,
        icon: 'Badge',
        bgColor: 'LimeGreen'
    },
    {
        name: InteractionCategory.repair,
        icon: 'Orbit',
        bgColor: 'DodgerBlue'
    },
    {
        name: InteractionCategory.parts,
        icon: 'PocketKnife',
        bgColor: 'SlateGray'
    },
    {
        name: InteractionCategory.purchaseTires,
        icon: 'Aperture',
        bgColor: 'Orange'
    },
    {
        name: InteractionCategory.towTruck,
        icon: 'Caravan',
        bgColor: 'OrangeRed'
    }
]

export function repairContents(
    id: string,
    t: NestedTranslationClient<'CarCategoryName'>
): IMenu[] {
    const route = actionsRoute(id)

    return generateMenu(route.new, t, repairData)
}
