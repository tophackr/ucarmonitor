'use client'

import { ButtonCell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'

interface DeleteButtonProps {
    callback: () => void
}

export function DeleteButton({ callback }: DeleteButtonProps) {
    const t = useTranslations('Common')

    return (
        <Section>
            <ButtonCell
                mode={'destructive'}
                className={'justify-center'}
                onClick={callback}
            >
                {t('delete')}
            </ButtonCell>
        </Section>
    )
}
