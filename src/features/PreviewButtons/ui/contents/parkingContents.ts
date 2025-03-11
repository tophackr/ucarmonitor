import { InteractionCategory } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../types/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const parkingContents = (
    id: string,
    t: NestedTranslationClient<'CarCategoryName'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
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

    return generateContents(id, t, data)
}
