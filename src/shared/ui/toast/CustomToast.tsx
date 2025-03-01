import { Snackbar } from '@telegram-apps/telegram-ui'
import { toast as sonnerToast } from 'sonner'
import { callMultiple, hasReactNode } from '@/shared/utils'
import { LucideIcon } from '../lucide-icon'
import type { ToastProps } from './ToastProps'

export function CustomToast({
    id,
    icon,
    title,
    description,
    button,
    link,
    duration,
    onClose
}: ToastProps) {
    return (
        <Snackbar
            key={id}
            before={hasReactNode(icon) ? icon : <LucideIcon name={'CircleX'} />}
            after={
                button && (
                    <Snackbar.Button
                        onClick={callMultiple(button.onClick, () =>
                            sonnerToast.dismiss(id)
                        )}
                    >
                        {button.label}
                    </Snackbar.Button>
                )
            }
            description={description}
            link={link}
            duration={duration}
            onClose={callMultiple(onClose)}
        >
            {title}
        </Snackbar>
    )
}
