import type { MainButtonState } from '@telegram-apps/sdk-react'

export interface MainButtonProps extends Partial<MainButtonState> {
    onClick: () => void
}
