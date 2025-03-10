'use client'

import { useTranslations } from 'next-intl'
import { type FieldValues, useFormContext } from 'react-hook-form'
import { useFormError } from '@/shared/ui/form'
import { MainButton, type MainButtonProps } from '@/shared/ui/tma'

type SaveMainButtonProps = Omit<
    MainButtonProps,
    'isLoaderVisible' | 'isEnabled' | 'onClick'
>

interface SaveButtonProps<T extends FieldValues> {
    disabled?: boolean
    onClick: (data: T) => void
}

export function SaveButton<T extends FieldValues>({
    text,
    disabled,
    onClick,
    ...props
}: SaveButtonProps<T> & SaveMainButtonProps) {
    const t = useTranslations('Common')

    const { handleSubmit } = useFormContext<T>()

    const { onErrorCallback } = useFormError()

    return (
        <MainButton
            text={text ?? t('save')}
            isLoaderVisible={disabled}
            isEnabled={!disabled}
            onClick={handleSubmit(onClick, onErrorCallback)}
            {...props}
        />
    )
}
