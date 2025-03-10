import '@telegram-apps/telegram-ui/dist/styles.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import 'normalize.css/normalize.css'
import { type PropsWithChildren, memo } from 'react'
import { type LocaleProps, routing } from '@/shared/i18n'
import type { ParamsProps } from '@/shared/lib/dom'
import { Providers } from '../providers'
import '../styles/globals.css'

export const AppLayout = memo(async function AppLayout({
    children,
    params
}: PropsWithChildren<ParamsProps<LocaleProps>>) {
    const { locale } = await params

    if (!routing.locales.includes(locale)) {
        notFound()
    }

    setRequestLocale(locale)

    return (
        <html lang={locale}>
            <body>
                <Providers>{children}</Providers>

                <SpeedInsights />
            </body>
        </html>
    )
})
