'use client'

import {
    miniApp,
    retrieveLaunchParams,
    useSignal
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren } from 'react'
import {
    useAppleClient,
    useClientOnce,
    useDidMount,
    useTelegramMock
} from '@/shared/hooks'
import { Loader } from '@/shared/ui'
import { init } from './core/init'
import { ErrorBoundary } from './ui/ErrorBoundary'
import { ErrorPage } from './ui/ErrorPage'

function RootInner({ children }: PropsWithChildren) {
    const isDev = process.env.NODE_ENV === 'development'

    // Mock Telegram environment in development mode if needed.
    if (isDev) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTelegramMock()
    }

    const lp = retrieveLaunchParams()
    const isApple = useAppleClient(lp)
    const debug = isDev || lp.platform === 'debug'

    // Initialize the library.
    useClientOnce(() => {
        init(debug)
    })

    const isDark = useSignal(miniApp.isDark)

    //useInitStore()

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={isApple ? 'ios' : 'base'}
        >
            {children}
        </AppRoot>
    )
}

export function TelegramProvider(props: PropsWithChildren) {
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
}
