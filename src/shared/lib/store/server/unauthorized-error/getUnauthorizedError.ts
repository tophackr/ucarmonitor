import {
    closeMiniApp,
    initDataUser,
    isMiniAppSupported,
    showPopup
} from '@telegram-apps/sdk-react'
import { type Locale, getLocales } from '@/shared/i18n'
import { type PopupCallbacks, getPopup } from '@/shared/ui/tma'
import { ButtonIds } from './ButtonIds'

export async function getUnauthorizedError() {
    const user = initDataUser()
    const { messages } = await getLocales(user?.language_code as Locale)
    const t = messages['PopupUnauthorizedError']

    const popupCallbacks: PopupCallbacks = {
        [ButtonIds.Close]: () => closeMiniApp(),
        [ButtonIds.Cancel]: () => (window.location.href = '/')
    }

    if (showPopup.isAvailable()) {
        await getPopup(
            {
                title: t['title'],
                message: t['description'],
                buttons: [
                    {
                        id: ButtonIds.Close,
                        type: 'close'
                    },
                    {
                        id: ButtonIds.Cancel,
                        type: 'cancel'
                    }
                ]
            },
            popupCallbacks
        )
    } else if (!isMiniAppSupported() && window !== undefined) {
        window.close()
    }
}
