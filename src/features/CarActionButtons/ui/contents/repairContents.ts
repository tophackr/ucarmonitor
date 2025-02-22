import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { CarCategory } from '../../types/CarCategories'
import { generateContents } from '../utils/generateContents'

export const repairContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarCategory.maintenance,
            icon: 'Bike',
            bgColor: 'MediumPurple'
        },
        {
            name: CarCategory.tireService,
            icon: 'Badge',
            bgColor: 'LimeGreen'
        },
        {
            name: CarCategory.repair,
            icon: 'Orbit',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarCategory.parts,
            icon: 'PocketKnife',
            bgColor: 'SlateGray'
        },
        {
            name: CarCategory.purchaseTires,
            icon: 'Aperture',
            bgColor: 'Orange'
        },
        {
            name: CarCategory.towTruck,
            icon: 'Caravan',
            bgColor: 'OrangeRed'
        }
    ]

    return generateContents(id, t, data, 'repair')
}
