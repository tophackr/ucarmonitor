import { type PropsWithChildren, memo } from 'react'
import { Toaster } from 'sonner'
import { DefaultCarContextProvider } from '@/entities/default-car'
import { I18nProvider } from '@/shared/i18n'
import { StoreProvider } from '../store/provider'
import { TelegramProvider } from '../tma/provider'

export const Providers = memo(function Providers({
    children
}: PropsWithChildren) {
    return (
        <StoreProvider>
            <TelegramProvider>
                <I18nProvider>
                    <DefaultCarContextProvider>
                        {children}
                    </DefaultCarContextProvider>
                </I18nProvider>
                <Toaster />
            </TelegramProvider>
        </StoreProvider>
    )
})
