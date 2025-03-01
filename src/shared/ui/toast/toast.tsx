import { toast as sonnerToast } from 'sonner'
import { CustomToast } from './CustomToast'
import type { ToastProps } from './ToastProps'

export function toast({
    icon,
    title,
    description,
    button,
    link,
    duration = 4000,
    onClose
}: Omit<ToastProps, 'id'>) {
    return sonnerToast.custom(
        id => (
            <CustomToast
                id={id}
                icon={icon}
                title={title}
                description={description}
                button={button}
                link={link}
                duration={duration}
                onClose={onClose}
            />
        ),
        { duration }
    )
}
