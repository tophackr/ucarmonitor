import { toast as sonnerToast } from 'sonner'
import { SnackbarToast } from '../ui/toast/SnackbarToast'
import type { ToastProps } from '../ui/toast/ToastProps'

export function toast({ duration = 4000, ...props }: Omit<ToastProps, 'id'>) {
    return sonnerToast.custom(
        id => (
            <SnackbarToast
                id={id}
                duration={duration}
                {...props}
            />
        ),
        { duration }
    )
}
