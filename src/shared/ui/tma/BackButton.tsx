'use client'

import { backButton } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'
import { useRouter } from '@/shared/i18n'

export function BackButton() {
    const router = useRouter()

    useEffect(() => {
        backButton.mount()
        backButton.show()
        const offClick = backButton.onClick(() => {
            router.back()
        })

        return () => {
            backButton.hide()
            offClick()
            backButton.unmount()
        }
    }, [router])

    return <></>
}
