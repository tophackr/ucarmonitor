import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type PropsWithChildren } from 'react'
import { defaultTimeZone } from './config'

export async function I18nProvider({ children }: PropsWithChildren) {
    const messages = await getMessages()

    return (
        <NextIntlClientProvider
            messages={messages}
            timeZone={defaultTimeZone}
        >
            {children}
        </NextIntlClientProvider>
    )
}
