import { createContext } from 'react'
import { defaultCallback } from '../constants/defaults'
import type { EditSetValueContextProps } from '../types/EditContextProps'

export const EditSetValueContext = createContext<EditSetValueContextProps>({
    setEditValue: defaultCallback
})
