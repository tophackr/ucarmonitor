import type { PropsWithChildren } from 'react'
import { TelegramProvider } from '@/entities/telegram'
import { I18nProvider } from '@/shared/i18n'
import { StoreProvider } from '@/shared/store'

export function Providers({ children }: PropsWithChildren) {
    return (
        <StoreProvider>
            <TelegramProvider>
                <I18nProvider>{children}</I18nProvider>
            </TelegramProvider>
        </StoreProvider>
    )
}
