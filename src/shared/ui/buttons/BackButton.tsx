'use client'

import { backButton } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'
import { useRouter } from '@/shared/i18n'

export function BackButton() {
    const router = useRouter()

    useEffect(() => {
        backButton.show()

        return () => {
            backButton.hide()
        }
    }, [])

    useEffect(() => {
        const offClick = backButton.onClick(() => {
            router.back()
        })

        return () => {
            offClick()
        }
    }, [router])

    return <></>
}
