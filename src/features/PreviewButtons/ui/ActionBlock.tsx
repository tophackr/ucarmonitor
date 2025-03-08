'use client'

import { useTranslations } from 'next-intl'
import { useCarContext } from '@/entities/car'
import { useRouter } from '@/shared/i18n'
import { ActionButton } from './ActionButton'
import { ActionModal } from './ActionModal'
import { ModalContent } from './ModalContent'
import { useActionButtons } from './hooks/useActionButtons'

export function ActionBlock() {
    const t = useTranslations('CarActionContents')
    const { car } = useCarContext()
    const router = useRouter()

    const buttons = useActionButtons(car.id)

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
                <ModalContent content={button.content(car.id, t)} />
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
