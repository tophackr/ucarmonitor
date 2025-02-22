import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'
import { CarCategory } from '../../types/CarCategories'
import { generateContents } from '../utils/generateContents'

export const financeContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>
): ActionContentProps[] => {
    const data: ActionContentData[] = [
        {
            name: CarCategory.insurance,
            icon: 'Ambulance',
            bgColor: 'OrangeRed'
        },
        {
            name: CarCategory.tax,
            icon: 'Calculator',
            bgColor: 'MediumPurple'
        },
        {
            name: CarCategory.stateInspection,
            icon: 'LoaderPinwheel',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarCategory.fine,
            icon: 'CircleDollarSign',
            bgColor: 'Orange'
        },
        {
            name: CarCategory.carPurchase,
            icon: 'Container',
            bgColor: 'LimeGreen'
        },
        {
            name: CarCategory.loanRepayment,
            icon: 'Captions',
            bgColor: 'DeepPink'
        },
        {
            name: CarCategory.leasing,
            icon: 'NotepadText',
            bgColor: 'SlateGray'
        }
    ]

    return generateContents(id, t, data, 'finance')
}
