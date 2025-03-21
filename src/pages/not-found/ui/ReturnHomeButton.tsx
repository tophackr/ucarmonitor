'use client'

import { Button } from '@telegram-apps/telegram-ui'
import { type JSX, type PropsWithChildren, memo } from 'react'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'

export const ReturnHomeButton = memo(function ReturnHomeButton({
    children
}: PropsWithChildren): JSX.Element {
    const props = useButtonClick({ route: pagesRoute.home })

    return (
        <Button
            size='l'
            stretched={true}
            {...props}
        >
            {children}
        </Button>
    )
})
