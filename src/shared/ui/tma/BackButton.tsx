'use client'

import { memo } from 'react'
import { useBackButton } from './hooks/useBackButton'
import type { BackButtonProps } from './types/BackButtonProps'

export const BackButton = memo(function BackButton(props: BackButtonProps) {
    useBackButton(props)

    return null
})
