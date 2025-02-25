'use client'

import { Snackbar } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { PropsWithChildren } from 'react'
import { LucideIcon } from '@/shared/ui'

interface SnackbarErrorProps {
    showError: boolean
    setShowError: (value: boolean) => void
}

export function SnackbarError({
    showError,
    setShowError,
    children
}: PropsWithChildren<SnackbarErrorProps>) {
    const t = useTranslations('CarInfo')

    return (
        showError && (
            <Snackbar
                before={<LucideIcon name={'CircleX'} />}
                description={children}
                onClose={() => setShowError(false)}
            >
                {t('errors.title')}
            </Snackbar>
        )
    )
}
