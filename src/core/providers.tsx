import type { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'
import { TelegramProvider } from '@/entities/telegram'
import { I18nProvider } from '@/shared/i18n'
import { SettingsButton } from '@/shared/ui'
import { StoreProvider } from './store/provider'

export function Providers({ children }: PropsWithChildren) {
    return (
        <StoreProvider>
            <TelegramProvider>
                <SettingsButton />
                <I18nProvider>{children}</I18nProvider>
                <Toaster />
            </TelegramProvider>
        </StoreProvider>
    )
}
