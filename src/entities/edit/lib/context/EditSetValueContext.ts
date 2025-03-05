import { createContext } from 'react'
import { defaultCallback } from '../../config/defaults'
import type { EditSetValueContextProps } from '../../model/EditContextProps'

export const EditSetValueContext = createContext<EditSetValueContextProps>({
    setEditValue: defaultCallback
})
