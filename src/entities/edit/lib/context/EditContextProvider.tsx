'use client'

import React, { type PropsWithChildren, memo, useState } from 'react'
import type { MouseClickEvent } from '@/shared/types'
import { EditSetValueContext } from './EditSetValueContext'
import { EditValueContext } from './EditValueContext'

export const EditContextProvider = memo(function EditContextProvider({
    children
}: PropsWithChildren) {
    const [editValue, setEditValue] =
        useState<MouseClickEvent<React.MouseEvent<Element, MouseEvent>>>()

    return (
        <EditSetValueContext.Provider value={{ setEditValue }}>
            <EditValueContext.Provider value={{ editValue }}>
                {children}
            </EditValueContext.Provider>
        </EditSetValueContext.Provider>
    )
})
