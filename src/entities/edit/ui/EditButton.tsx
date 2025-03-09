'use client'

import { memo } from 'react'
import { useEditButton } from './hooks/useEditButton'
import type { EditButtonProps } from './types/EditButtonProps'

export const EditButton = memo(function EditButton(props: EditButtonProps) {
    useEditButton(props)

    return null
})
