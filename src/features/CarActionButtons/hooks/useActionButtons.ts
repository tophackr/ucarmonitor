import { actionsRoute } from '../route/actions'
import type { ActionModalProps } from '../types/ActionButtonProps'
import { CarCategory } from '../types/CarCategories'
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
            link: route.new(CarCategory.wash)
        },
        { name: 'fuel', icon: 'Fuel', link: route.new(CarCategory.fuel) },
        { name: 'repair', icon: 'Wrench', content: repairContents },
        { name: 'finance', icon: 'Landmark', content: financeContents },
        { name: 'more', icon: 'Ellipsis', content: moreContents }
    ]

    return buttons
}
