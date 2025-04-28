import { type JSX, type PropsWithChildren, memo } from 'react'
import { Toaster } from 'sonner'
import { I18nProvider } from '@/shared/i18n'
import { StoreProvider } from '../store/provider'
import { TelegramProvider } from '../tma/provider'

export const Providers = memo(function Providers({
    children
}: PropsWithChildren): JSX.Element {
    return (
        <StoreProvider>
            <TelegramProvider>
                <I18nProvider>{children}</I18nProvider>
                <Toaster />
            </TelegramProvider>
        </StoreProvider>
    )
})
