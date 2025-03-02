'use client'

import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import type { FieldErrors, FieldValues } from 'react-hook-form'
import { toast } from '../lib'

export function useFormError<T extends FieldValues>() {
    const t = useTranslations('Common')

    const onErrorCallback = useCallback(
        (errors: FieldErrors<T>) => {
            if (Object.keys(errors).length === 0) {
                return
            }

            const errorMessages = Object.values(errors)
                .map((error, index) => {
                    if (error && typeof error.message === 'string') {
                        return <p key={index}>{error.message}</p>
                    }
                    return null
                })
                .filter(Boolean)

            if (errorMessages.length > 0) {
                toast({
                    title: t('error'),
                    description: errorMessages
                })
            }
        },
        [t]
    )

    return { onErrorCallback }
}
