import { createContext } from 'react'
import type { CarsInitProps } from './types/CarsInitProps'

export const CarsInitContext = createContext<CarsInitProps>({
    isLoading: false
})
