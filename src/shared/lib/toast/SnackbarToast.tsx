import { Snackbar } from '@telegram-apps/telegram-ui'
import { toast as sonnerToast } from 'sonner'
import { callMultiple, hasReactNode } from '@/shared/lib'
import { LucideIcon } from '@/shared/ui'
import type { ToastProps } from './ToastProps'

export function SnackbarToast({
    id,
    icon,
    title,
    button,
    onClose,
    ...props
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
            onClose={callMultiple(onClose)}
            {...props}
        >
            {title}
        </Snackbar>
    )
}
