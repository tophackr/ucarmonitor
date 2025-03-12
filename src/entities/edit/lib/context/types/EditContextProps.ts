import type { EditButtonProps } from '../../../model/EditButtonProps'

export interface EditValueContextProps {
    editValue?: EditButtonProps
}

export interface EditSetValueContextProps {
    setEditValue: (value?: EditButtonProps) => void
}
