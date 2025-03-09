'use client'

import { useEffect } from 'react'
import { useEditSetValueContext } from '../../lib/context/hooks/useEditSetValueContext'
import type { EditButtonProps } from '../types/EditButtonProps'

export function useEditButton(props: EditButtonProps) {
    const { setEditValue } = useEditSetValueContext()

    useEffect(() => {
        setEditValue(props)

        return () => {
            setEditValue(undefined)
        }
    }, [props, setEditValue])
}
