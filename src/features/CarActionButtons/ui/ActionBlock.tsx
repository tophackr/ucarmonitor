'use client'

import { useTranslations } from 'next-intl'
import { useCarIdContext } from '@/entities/cars'
import { useRouter } from '@/shared/i18n'
import { useActionButtons } from '../hooks/useActionButtons'
import { ActionButton } from './ActionButton'
import { ActionModal } from './ActionModal'
import { ModalContent } from './ModalContent'

export function ActionBlock() {
    const t = useTranslations('CarActionContents')
    const { carId } = useCarIdContext()
    const router = useRouter()

    const buttons = useActionButtons(carId)

    return buttons.map(button =>
        'content' in button ? (
            <ActionModal
                key={button.name}
                trigger={
                    <ActionButton
                        name={button.name}
                        icon={button.icon}
                    />
                }
            >
                <ModalContent content={button.content(carId, t)} />
            </ActionModal>
        ) : (
            <ActionButton
                key={button.name}
                name={button.name}
                icon={button.icon}
                onClick={() => router.push(button.link)}
            />
        )
    )
}
