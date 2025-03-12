'use client'

import { type PropsWithChildren, memo, useState } from 'react'
import type { EditButtonProps } from '../../model/EditButtonProps'
import { EditSetValueContext } from './EditSetValueContext'
import { EditValueContext } from './EditValueContext'

export const EditContextProvider = memo(function EditContextProvider({
    children
}: PropsWithChildren) {
    const [editValue, setEditValue] = useState<EditButtonProps>()

    return (
        <EditSetValueContext.Provider value={{ setEditValue }}>
            <EditValueContext.Provider value={{ editValue }}>
                {children}
            </EditValueContext.Provider>
        </EditSetValueContext.Provider>
    )
})
