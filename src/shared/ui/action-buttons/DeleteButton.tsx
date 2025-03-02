'use client'

import {
    ButtonCell,
    type ButtonCellProps,
    Section
} from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export function DeleteButton({ className, ...props }: ButtonCellProps) {
    const t = useTranslations('Common')

    return (
        <Section>
            <ButtonCell
                mode={'destructive'}
                className={clsx('justify-center', className)}
                {...props}
            >
                {t('delete')}
            </ButtonCell>
        </Section>
    )
}
