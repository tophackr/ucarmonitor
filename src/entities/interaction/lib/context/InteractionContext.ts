import { createContext } from 'react'
import { InteractionCategory } from '../../model/Interaction'
import type { InteractionProps } from '../../model/Props'

export const InteractionContext = createContext<InteractionProps>({
    interaction: {
        id: '',
        carId: '',
        type: InteractionCategory.fuel,
        date: new Date(),
        mileage: 0
    }
})
