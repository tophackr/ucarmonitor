import { type OpenPopupOptions, openPopup } from '@telegram-apps/sdk-react'

type UsePopupProps = Record<string, () => void>

export async function getPopup(
    options: OpenPopupOptions,
    callbacks: UsePopupProps
) {
    const buttonId = await openPopup(options)
    return buttonId && callbacks[buttonId]?.()
}
