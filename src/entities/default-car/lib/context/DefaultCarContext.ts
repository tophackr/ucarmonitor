import { createContext } from 'react'
import type { DefaultCarState } from './types/DefaultCarState'

export const DefaultCarContext = createContext<DefaultCarState>({
    isInit: false
})
