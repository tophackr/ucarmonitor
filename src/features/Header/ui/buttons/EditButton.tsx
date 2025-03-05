'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { useEditValueContext } from '@/entities/edit'
import { LucideIcon } from '@/shared/ui'

export function EditButton() {
    const { editValue } = useEditValueContext()

    return (
        editValue && (
            <IconButton
                size={'m'}
                {...editValue}
            >
                <LucideIcon name={'Pencil'} />
            </IconButton>
        )
    )
}
