import { CarActionCategory } from '@/entities/cars'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const repairContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarActionCategory.maintenance,
            icon: 'Bike',
            bgColor: 'MediumPurple'
        },
        {
            name: CarActionCategory.tireService,
            icon: 'Badge',
            bgColor: 'LimeGreen'
        },
        {
            name: CarActionCategory.repair,
            icon: 'Orbit',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarActionCategory.parts,
            icon: 'PocketKnife',
            bgColor: 'SlateGray'
        },
        {
            name: CarActionCategory.purchaseTires,
            icon: 'Aperture',
            bgColor: 'Orange'
        },
        {
            name: CarActionCategory.towTruck,
            icon: 'Caravan',
            bgColor: 'OrangeRed'
        }
    ]

    return generateContents(id, t, data, 'repair')
}
