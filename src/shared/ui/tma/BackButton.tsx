'use client'

import { backButton } from '@telegram-apps/sdk-react'
import { memo, useEffect } from 'react'
import { useRouter } from '@/shared/i18n'

interface BackButtonProps {
    route?: string
}

export const BackButton = memo(function BackButton({ route }: BackButtonProps) {
    const router = useRouter()

    useEffect(() => {
        backButton.mount()
        backButton.show()
        const offClick = backButton.onClick(() =>
            route ? router.push(route) : router.back()
        )

        return () => {
            backButton.hide()
            offClick()
            backButton.unmount()
        }
    }, [route, router])

    return <></>
})
