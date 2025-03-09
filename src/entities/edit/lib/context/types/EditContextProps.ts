import React from 'react'
import type { MouseClickEvent } from '@/shared/lib/dom'

export interface EditValueContextProps {
    editValue?: MouseClickEvent<React.MouseEvent<Element, MouseEvent>>
}

export interface EditSetValueContextProps {
    setEditValue: (
        value?: MouseClickEvent<React.MouseEvent<Element, MouseEvent>>
    ) => void
}
