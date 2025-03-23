'use client'

import {
    ButtonCell,
    type ButtonCellProps,
    Section
} from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { cx } from '@/shared/lib/dom'

export const DeleteButton = memo(function DeleteButton({
    className,
    ...props
}: ButtonCellProps): JSX.Element {
    const t = useTranslations('Common')

    return (
        <Section>
            <ButtonCell
                mode={'destructive'}
                className={cx('justify-center', className)}
                {...props}
            >
                {t('delete')}
            </ButtonCell>
        </Section>
    )
})
