'use client'

import {
    miniApp,
    postEvent,
    retrieveLaunchParams,
    useSignal
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { type JSX, type PropsWithChildren, memo, useEffect } from 'react'
import { useClientOnce } from '@/shared/lib/dom'
import { Loader } from '@/shared/ui'
import { isAppleClient } from '@/shared/ui/tma'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'
import { init } from './init'
import { useDidMount } from './useDidMount'
import { useTelegramMock } from './useTelegramMock'

const RootInner = memo(function RootInner({
    children
}: PropsWithChildren): JSX.Element {
    const isDev = process.env.NODE_ENV === 'development'

    // Mock Telegram environment in development mode if needed.
    if (isDev) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTelegramMock()
    }

    const lp = retrieveLaunchParams()
    const isApple = isAppleClient(lp)
    const debug = isDev || lp.platform === 'debug'

    // Initialize the library.
    useClientOnce(() => {
        init(debug)
    })

    const isDark = useSignal(miniApp.isDark)

    // TODO: temp fix for ios
    useEffect(() => {
        postEvent('web_app_request_theme')
    }, [])

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={isApple ? 'ios' : 'base'}
        >
            {children}
        </AppRoot>
    )
})

export const TelegramProvider = memo(function TelegramProvider(
    props: PropsWithChildren
) {
    // Unfortunately, Telegram Mini Apps does not allow us to use all features of
    // the Server Side Rendering. That's why we are showing loader on the server
    // side.
    const didMount = useDidMount()

    return didMount ? (
        <ErrorBoundary fallback={ErrorPage}>
            <RootInner {...props} />
        </ErrorBoundary>
    ) : (
        <Loader />
    )
})
