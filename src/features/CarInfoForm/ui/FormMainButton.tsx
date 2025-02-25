import { callMultiple } from '@telegram-apps/telegram-ui/dist/helpers/function'
import { useTranslations } from 'next-intl'
import { useCallback, useState } from 'react'
import { type UseFormHandleSubmit, useFormContext } from 'react-hook-form'
import type { ICar } from '@/entities/cars'
import { MainButton } from '@/shared/ui'
import { useSaveCar } from '../hooks/useSaveCar'
import { SnackbarError } from './SnackbarError'

interface FormMainButtonProps {
    handleSubmit: UseFormHandleSubmit<ICar>
}

export function FormMainButton({ handleSubmit }: FormMainButtonProps) {
    const t = useTranslations('CarInfo')

    const {
        formState: { errors }
    } = useFormContext<ICar>()

    const [showError, setShowError] = useState(false)

    const { callback } = useSaveCar()

    const onErrorCallback = useCallback(() => {
        if (Object.values(errors).length) {
            setShowError(true)
        }
    }, [errors])

    return (
        <>
            <MainButton
                isVisible={true}
                text={t('save')}
                onClick={callMultiple(onErrorCallback, handleSubmit(callback))}
            />

            <SnackbarError
                showError={showError}
                setShowError={setShowError}
            >
                {Object.values(errors).map(({ type, message }) => (
                    <p key={type}>{message}</p>
                ))}
            </SnackbarError>
        </>
    )
}
