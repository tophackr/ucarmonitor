import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { CarCategory } from '../../types/CarCategories'
import { generateContents } from '../utils/generateContents'

export const parkingContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarCategory.parking,
            icon: 'SquareParking',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarCategory.tollRoad,
            icon: 'TrafficCone',
            bgColor: 'YellowGreen'
        },
        {
            name: CarCategory.taxi,
            icon: 'CarTaxiFront',
            bgColor: 'Orange'
        },
        {
            name: CarCategory.soberDriver,
            icon: 'ContactRound',
            bgColor: 'MediumPurple'
        },
        {
            name: CarCategory.alarmSystem,
            icon: 'Satellite',
            bgColor: 'DeepPink'
        }
    ]

    return generateContents(id, t, data, 'parking')
}
