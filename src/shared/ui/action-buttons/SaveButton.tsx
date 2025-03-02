'use client'

import { useTranslations } from 'next-intl'
import { type FieldValues, useFormContext } from 'react-hook-form'
import { useFormError } from '../../hooks/useFormError'
import { MainButton } from '../buttons/MainButton'

interface SaveButtonProps<T extends FieldValues> {
    text?: string
    callback: (data: T) => void
}

export function SaveButton<T extends FieldValues>({
    text,
    callback
}: SaveButtonProps<T>) {
    const t = useTranslations('Common')

    const { handleSubmit } = useFormContext<T>()

    const { onErrorCallback } = useFormError()

    return (
        <MainButton
            isVisible={true}
            text={text ?? t('save')}
            onClick={handleSubmit(callback, onErrorCallback)}
        />
    )
}
