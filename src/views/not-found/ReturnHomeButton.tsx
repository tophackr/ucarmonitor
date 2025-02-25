'use client'

import { Button } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren } from 'react'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'

export function ReturnHomeButton({ children }: PropsWithChildren) {
    const props = useButtonClick(pagesRoute.cars)

    return (
        <Button
            size='l'
            stretched={true}
            {...props}
        >
            {children}
        </Button>
    )
}
