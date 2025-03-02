import { InteractionCategory } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { generateContents } from '../utils/generateContents'

export const financeContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: InteractionCategory.insurance,
            icon: 'Ambulance',
            bgColor: 'OrangeRed'
        },
        {
            name: InteractionCategory.tax,
            icon: 'Calculator',
            bgColor: 'MediumPurple'
        },
        {
            name: InteractionCategory.stateInspection,
            icon: 'LoaderPinwheel',
            bgColor: 'DodgerBlue'
        },
        {
            name: InteractionCategory.fine,
            icon: 'CircleDollarSign',
            bgColor: 'Orange'
        },
        {
            name: InteractionCategory.carPurchase,
            icon: 'Container',
            bgColor: 'LimeGreen'
        },
        {
            name: InteractionCategory.loanRepayment,
            icon: 'Captions',
            bgColor: 'DeepPink'
        },
        {
            name: InteractionCategory.leasing,
            icon: 'NotepadText',
            bgColor: 'SlateGray'
        }
    ]

    return generateContents(id, t, data, 'finance')
}
