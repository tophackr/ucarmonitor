import { type ShowPopupOptions, showPopup } from '@telegram-apps/sdk-react'

type UsePopupProps = Record<string, () => void>

export async function getPopup(
    options: ShowPopupOptions,
    callbacks: UsePopupProps
): Promise<void | '' | null> {
    const buttonId = await showPopup(options)
    return buttonId && callbacks[buttonId]?.()
}
