import { createContext } from 'react'
import type { InteractionsInitProps } from './types/InteractionsInitProps'

export const InteractionsInitContext = createContext<InteractionsInitProps>({
    isLoading: false
})
