'use client'

import {
    miniApp,
    postEvent,
    retrieveLaunchParams,
    useSignal
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { type JSX, type PropsWithChildren, memo, useEffect } from 'react'
import { useClientOnce, useEffectOnce } from '@/shared/lib/dom'
import { Loader } from '@/shared/ui'
import { isAppleClient } from '@/shared/ui/tma'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'
import { init } from './init'
import { mockEnv } from './mockEnv'
import { useDidMount } from './useDidMount'

const RootInner = memo(function RootInner({
    children
}: PropsWithChildren): JSX.Element {
    const isDev = process.env.NODE_ENV === 'development'

    // Mock Telegram environment in development mode if needed.
    useClientOnce(() => {
        mockEnv(isDev)
    })

    const lp = retrieveLaunchParams()
    const isApple = isAppleClient(lp)
    const debug = isDev || lp.tgWebAppStartParam === 'debug'

    // Initialize the library.
    useClientOnce(() => {
        init(debug)
    })

    const isDark = useSignal(miniApp.isDark)

    // TODO: temp fix for ios
    useEffect(() => {
        postEvent('web_app_request_theme')
    }, [])

    useEffectOnce(() => {
        postEvent('web_app_ready')
    })

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
