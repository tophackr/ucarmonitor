import { createContext } from 'react'
import type { EditValueContextProps } from './types/EditContextProps'

export const EditValueContext = createContext<EditValueContextProps>({
    editValue: undefined
})
