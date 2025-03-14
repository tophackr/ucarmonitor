import '@telegram-apps/telegram-ui/dist/styles.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import 'normalize.css/normalize.css'
import { type JSX, type PropsWithChildren, memo } from 'react'
import { type LocaleProps, routing } from '@/shared/i18n'
import type { ParamsProps } from '@/shared/lib/dom'
import { Providers } from '../providers/Providers'
import '../styles/globals.css'

export const AppLayout = memo(async function AppLayout({
    children,
    params
}: PropsWithChildren<ParamsProps<LocaleProps>>): Promise<JSX.Element> {
    const { locale } = await params

    if (!routing.locales.includes(locale)) {
        notFound()
    }

    setRequestLocale(locale)

    return (
        <html lang={locale}>
            <body>
                <div id={'app'}>
                    <Providers>{children}</Providers>

                    <SpeedInsights />
                </div>
            </body>
        </html>
    )
})
