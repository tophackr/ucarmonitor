import { InteractionCategory, actionsRoute } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import { type IMenu, type KeyMenu, generateMenu } from '@/shared/lib/link-menu'

const parkingData: KeyMenu<InteractionCategory>[] = [
    {
        name: InteractionCategory.parking,
        icon: 'SquareParking',
        bgColor: 'DodgerBlue'
    },
    {
        name: InteractionCategory.tollRoad,
        icon: 'TrafficCone',
        bgColor: 'YellowGreen'
    },
    {
        name: InteractionCategory.taxi,
        icon: 'CarTaxiFront',
        bgColor: 'Orange'
    },
    {
        name: InteractionCategory.soberDriver,
        icon: 'ContactRound',
        bgColor: 'MediumPurple'
    },
    {
        name: InteractionCategory.alarmSystem,
        icon: 'Satellite',
        bgColor: 'DeepPink'
    }
]

export function parkingContents(
    id: string,
    t: NestedTranslationClient<'CarCategoryName'>
): IMenu[] {
    const route = actionsRoute(id)

    return generateMenu(route.new, t, parkingData)
}
