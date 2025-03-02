'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { useParams } from 'next/navigation'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'
import { LucideIcon } from '@/shared/ui'

export function EditButton() {
    const { carId } = useParams<{ carId: string }>()

    const props = useButtonClick({ route: pagesRoute.carEdit(carId) })

    return (
        <IconButton
            size={'m'}
            {...props}
        >
            <LucideIcon name={'Pencil'} />
        </IconButton>
    )
}
