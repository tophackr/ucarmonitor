import { CarActionCategory } from '@/entities/cars'
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
            name: CarActionCategory.insurance,
            icon: 'Ambulance',
            bgColor: 'OrangeRed'
        },
        {
            name: CarActionCategory.tax,
            icon: 'Calculator',
            bgColor: 'MediumPurple'
        },
        {
            name: CarActionCategory.stateInspection,
            icon: 'LoaderPinwheel',
            bgColor: 'DodgerBlue'
        },
        {
            name: CarActionCategory.fine,
            icon: 'CircleDollarSign',
            bgColor: 'Orange'
        },
        {
            name: CarActionCategory.carPurchase,
            icon: 'Container',
            bgColor: 'LimeGreen'
        },
        {
            name: CarActionCategory.loanRepayment,
            icon: 'Captions',
            bgColor: 'DeepPink'
        },
        {
            name: CarActionCategory.leasing,
            icon: 'NotepadText',
            bgColor: 'SlateGray'
        }
    ]

    return generateContents(id, t, data, 'finance')
}
