import { InteractionCategory } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../model/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const repairContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
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

    return generateContents(id, t, data, 'repair')
}
