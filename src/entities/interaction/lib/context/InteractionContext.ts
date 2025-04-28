import { createContext } from 'react'
import { InteractionCategory } from '../../model/InteractionDto'
import type { InteractionProps } from '../../model/Props'

export const InteractionContext = createContext<InteractionProps>({
    interaction: {
        id: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        type: InteractionCategory.mileage,
        date: new Date().toISOString(),
        mileage: 0,
        amount: null,
        description: '',
        engineHours: null,
        carId: '',
        userId: ''
    }
})
