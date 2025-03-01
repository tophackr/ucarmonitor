import type { ICar } from '@/entities/cars'
import { useFormError } from '@/shared/hooks'
import { MainButton } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { useSaveCar } from '../hooks/useSaveCar'

export function SaveButton() {
    const t = useTranslations('CarInfo')

    const { handleSubmit } = useFormContext<ICar>()

    const { saveCallback } = useSaveCar()

    const { onErrorCallback } = useFormError()

    return (
        <MainButton
            isVisible={true}
            text={t('save')}
            onClick={handleSubmit(saveCallback, onErrorCallback)}
        />
    )
}
