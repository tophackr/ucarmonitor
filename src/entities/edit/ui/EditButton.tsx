'use client'

import { memo, useEffect } from 'react'
import { useEditSetValueContext } from '../lib/context/hooks/useEditSetValueContext'
import type { EditButtonProps } from './types/EditButtonProps'

export const EditButton = memo(function EditButton(props: EditButtonProps) {
    const { setEditValue } = useEditSetValueContext()

    useEffect(() => {
        setEditValue(props)

        return () => {
            setEditValue(undefined)
        }
    }, [props, setEditValue])

    return null
})
