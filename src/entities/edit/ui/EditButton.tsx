'use client'

import React, { memo, useEffect } from 'react'
import type { MouseClickEvent } from '@/shared/lib/dom'
import { useEditSetValueContext } from '../lib/context/hooks/useEditSetValueContext'

export const EditButton = memo(function EditButton(
    props: MouseClickEvent<React.MouseEvent<Element, MouseEvent>>
) {
    const { setEditValue } = useEditSetValueContext()

    useEffect(() => {
        setEditValue(props)

        return () => {
            setEditValue(undefined)
        }
    }, [props, setEditValue])

    return <></>
})
