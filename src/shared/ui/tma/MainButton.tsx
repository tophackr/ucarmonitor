'use client'

import { memo } from 'react'
import { useMainButton } from './hooks/useMainButton'
import type { MainButtonProps } from './types/MainButtonProps'

export const MainButton = memo(function MainButton(updates: MainButtonProps) {
    useMainButton(updates)

    return null
})
