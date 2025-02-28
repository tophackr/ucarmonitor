import { CarActionCategory } from '@/entities/cars'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const parkingContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarActionCategory.parking,
            icon: 'SquareParking',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarActionCategory.tollRoad,
            icon: 'TrafficCone',
            bgColor: 'YellowGreen'
        },
        {
            name: CarActionCategory.taxi,
            icon: 'CarTaxiFront',
            bgColor: 'Orange'
        },
        {
            name: CarActionCategory.soberDriver,
            icon: 'ContactRound',
            bgColor: 'MediumPurple'
        },
        {
            name: CarActionCategory.alarmSystem,
            icon: 'Satellite',
            bgColor: 'DeepPink'
        }
    ]

    return generateContents(id, t, data, 'parking')
}
