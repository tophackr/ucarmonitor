import { createContext } from 'react'
import type { EditValueContextProps } from '../../model/EditContextProps'

export const EditValueContext = createContext<EditValueContextProps>({
    editValue: undefined
})
