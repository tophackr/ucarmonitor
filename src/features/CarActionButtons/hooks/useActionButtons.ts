import { InteractionCategory, actionsRoute } from '@/entities/interaction'
import type { ActionModalProps } from '../types/ActionButtonProps'
import { financeContents } from '../ui/contents/financeContents'
import { moreContents } from '../ui/contents/moreContents'
import { parkingContents } from '../ui/contents/parkingContents'
import { repairContents } from '../ui/contents/repairContents'

export function useActionButtons(carId: string): ActionModalProps[] {
    const route = actionsRoute(carId)

    const buttons: ActionModalProps[] = [
        { name: 'parking', icon: 'SquareParking', content: parkingContents },
        {
            name: 'wash',
            icon: 'CloudDrizzle',
            link: route.new(InteractionCategory.wash)
        },
        {
            name: 'fuel',
            icon: 'Fuel',
            link: route.new(InteractionCategory.fuel)
        },
        { name: 'repair', icon: 'Wrench', content: repairContents },
        { name: 'finance', icon: 'Landmark', content: financeContents },
        { name: 'more', icon: 'Ellipsis', content: moreContents }
    ]

    return buttons
}
