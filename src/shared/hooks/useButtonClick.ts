'use client'

import { useState } from 'react'
import { useRouter } from '../i18n'

export function useButtonClick(route: string, callback?: () => void) {
    const router = useRouter()
    const [disabled, setDisabled] = useState(false)

    const onClick = () => {
        if (disabled) {
            return
        }

        setDisabled(true)
        callback?.()
        router.push(route)
    }

    return { disabled, onClick }
}
